// JwtService.$inject = ['localStorageService', 'jwtHelper', 'FIRSTNEAR_CONSTANTS'];
JwtService.$inject = ['localStorageService', 'jwtHelper'];

// export default function JwtService(localStorageService, jwtHelper, FIRSTNEAR_CONSTANTS) {
export default function JwtService(localStorageService, jwtHelper) {
  var service = {
    hasTokenExpired: hasTokenExpired,
    hasTokenAboutToExpired: hasTokenAboutToExpired,
    persistToken: persistToken
  };

  return service;

  function hasTokenExpired(jwt) {
    return jwtHelper.isTokenExpired(jwt);
  }

  function hasTokenAboutToExpired() {
    var jwt = localStorageService.get('jwt');

    var jwtExpiredDate = jwtHelper.getTokenExpirationDate(jwt);
    var jwtExpiredInMins = moment(jwtExpiredDate).fromNow();
    var expiredInMins = parseInt(jwtExpiredInMins.replace("in", "").replace("minutes", "").replace("minute", "").replace("hours", "").replace("hour", "").trim());

    if(jwtExpiredInMins.indexOf("a") > 0 || jwtExpiredInMins.indexOf("an") > 0) {
      expiredInMins = 1;
    }

    if(jwtExpiredInMins.indexOf("hour") > 0) {
      expiredInMins *= 60;
    }

    // TMP DISABLE
    // return (expiredInMins <= FIRSTNEAR_CONSTANTS.showWarningTokenExpiryInMins)?true:false;
    return false;
  }

  function persistToken(jwt) {
    if (jwt) {
      localStorageService.set('jwt', jwt);

      // Decode token and store accountId
      var decodedJwt = jwtHelper.decodeToken(jwt);


      localStorageService.set('accountId', decodedJwt.accountId);
    }
  }
}
