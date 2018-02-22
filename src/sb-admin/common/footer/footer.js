export default function footer() {
  return {
    template: require('./footer.html'),
    restrict: 'E',
    replace: true,
    controller: FooterCtrl,
    controllerAs: 'vm'
  };
}

FooterCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService'];

function FooterCtrl($scope, FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService) {
  /*jshint validthis: true */
  var vm = this;
  // $scope.environmentTag = FIRSTNEAR_CONSTANTS.displayEnvironmentTag ? FIRSTNEAR_CONSTANTS.environmentTag : false;
  // $scope.currentOrgId = $stateParams.orgId;
  //
  // vm.region = LoginService.getRegionFromLocalStorage(FIRSTNEAR_CONSTANTS.localStoragePrefix + "region");
  // vm.isWelcomeState = $state.includes('spotz.welcome');
  //
  // // Delete session storage and then redirect to login page
  // vm.logout = logout;
  // function logout() {
  //   var remember2FATokenKey = BaseUrlService.getRemember2FATokenKey();
  //   var remember2FAToken = localStorageService.cookie.get(remember2FATokenKey);
  //
  //   LoginService.logout().then(function success(){
  //     localStorageService.clearAll();
  //     localStorageService.cookie.set(remember2FATokenKey, remember2FAToken);
  //     $state.transitionTo('login');
  //   }, function fail(e){
  //     localStorageService.clearAll();
  //     $state.transitionTo('login');
  //   });
  // }
  //
  // vm.createOrg = createOrg;
  // function createOrg() {
  //   OrgCreateService.openModal();
  // }
}


