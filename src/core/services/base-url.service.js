BaseUrlService.$inject = ['Restangular', 'FIRSTNEAR_CONSTANTS', '$window'];

export default function BaseUrlService(Restangular, FIRSTNEAR_CONSTANTS, $window) {

  var service = {
    getBaseUrl: getBaseUrl,
    getRemember2FATokenKey: getRemember2FATokenKey
  };

  return service;

  function getBaseUrl(region) {
    return FIRSTNEAR_CONSTANTS.retailApiAuBaseUrl;
  }

  function getRemember2FATokenKey() {
    var remember2FAToken;
    var selectedRegion = $window.localStorage.getItem(FIRSTNEAR_CONSTANTS.localStoragePrefix + "region");
    remember2FAToken = FIRSTNEAR_CONSTANTS.remember2FATokenAU;

    return remember2FAToken;
  }

}
