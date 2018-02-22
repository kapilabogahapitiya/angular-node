GlobalRestangularConfigRun.$inject = ['Restangular', '$state', 'JwtService', 'Notification', 'UrlParserService', '$rootScope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', 'BaseUrlService'];

//This run config is for any config that depends on any service.
//If there are no service dependencies then put in normal config.
export default function GlobalRestangularConfigRun(Restangular, $state, JwtService, Notification, UrlParserService, $rootScope, FIRSTNEAR_CONSTANTS, localStorageService, BaseUrlService) {
  Restangular.setErrorInterceptor(function (response) {
    if (response.status === 401) {
      if (response.data.message) {
        if(response.data.code == FIRSTNEAR_CONSTANTS.sessionTimeoutCode || response.data.code == FIRSTNEAR_CONSTANTS.CNCsessionTimeoutCode)
        {
          Notification.error({message: FIRSTNEAR_CONSTANTS.errorSessionTimeoutMsg, replaceMessage: true});
          // When token is expired, go to login page
          $state.transitionTo('welcome');
        }
        // else if(response.data.message == FIRSTNEAR_CONSTANTS.nonVerifiedAccountMsg)
        // {
        //   // Valid account, but not verified yet.
        //   $state.transitionTo('spotz.resendverify');
        // }
      }
    }
    return true;
  });

  Restangular.addResponseInterceptor(function (data, operation, what, url, response) {
    JwtService.persistToken(response.headers('x-access-token'));

    // Remember 2FA token for 30 days
    var remember2FATokenKey = BaseUrlService.getRemember2FATokenKey();
    if(!_.isNull(response.headers(FIRSTNEAR_CONSTANTS.remember2FATokenHeader)))
    {
      localStorageService.cookie.set(remember2FATokenKey, response.headers(FIRSTNEAR_CONSTANTS.remember2FATokenHeader), FIRSTNEAR_CONSTANTS.remember2FATokenExpiredDays);
    }

    // Intercept based on presence of publish-required header instead of URL
    if (!response.headers('x-localz-spotzupd')) {
      return data;
    }

    var urlSegments = UrlParserService.getSegments(url);
    var projectId = urlSegments[urlSegments.indexOf('projects') + 1];
    $rootScope['publishRequired' + projectId] = (response.headers('x-localz-spotzupd') === 'false');
    return data;
  });
}
