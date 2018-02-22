RedirectUrlConfigRun.$inject = ['$rootScope', '$urlRouter', 'localStorageService', 'FIRSTNEAR_CONSTANTS', '$location', '$state'];

export default function RedirectUrlConfigRun($rootScope, $urlRouter, localStorageService, FIRSTNEAR_CONSTANTS, $location, $state) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name === 'login' && localStorageService.get('accountId') !== null && fromState.name !== '') {
      return $state.go(fromState.name)
    }
  });
}