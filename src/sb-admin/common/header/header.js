export default function header() {
  return {
    template: require('./header.html'),
    restrict: 'E',
    replace: true,
    controller: HeaderCtrl,
    controllerAs: 'vm'
  };
}

// HeaderCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', 'OrgsService', 'OrgCreateService', '$state', '$stateParams', 'LoginService', '$rootScope', 'BaseUrlService'];
HeaderCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService','$window','$location'];

// function HeaderCtrl($scope, FIRSTNEAR_CONSTANTS, localStorageService, OrgsService, OrgCreateService, $state, $stateParams, LoginService, $rootScope, BaseUrlService) {
function HeaderCtrl($scope, $location,FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService) {
  /*jshint validthis: true */
  var vm = this;
  $scope.signUpShow = true;
  
  $scope.$on('$viewContentLoaded', function(event) {    
    var tempShow = localStorageService.get('isVisibleSignUp');
    if(tempShow == null){
      $scope.signUpShow = true;
    } 
    else {
      $scope.signUpShow = tempShow;
    }
    
  });
  
  // $scope.localzLogo = FIRSTNEAR_CONSTANTS.localzLogo;
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
  //
  // showSideMenu();
  // function showSideMenu() {
  //   OrgsService.loadAccountOrgs().then(function (orgs) {
  //     if (_.isEmpty(orgs)) {
  //       vm.showMenu = false;
  //     } else {
  //       vm.showMenu = true;
  //     }
  //   });
  // }
  //
  // $rootScope.$on('header:refreshSideMenu', function(event, data){
  //   showSideMenu();
  // });
  
}


