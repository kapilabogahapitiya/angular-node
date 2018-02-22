LoginCtrl.$inject = ['$state', 'LoginService', '$scope', '$rootScope','RestangularService','$http','localStorageService'];

export default function LoginCtrl($state, LoginService, $scope, $rootScope, RestangularService,$http, localStorageService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.credentials = {
    username: '',
    password: '',
    remember_me: false,
  };
  $scope.$on('$viewContentLoaded', function(){
    // localStorageService.set('verified',undefined);
  });
  $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
    console.log(userDetails);
    $state.go("firstNear.welcomePageCustomers");
  });
  vm.doLogin = doLogin;

  function doLogin() {
    $scope.$broadcast('show-errors-check-validity');
    if (!_.isEmpty(vm.loginFrm.$error)) {
      return;
    } 
    LoginService.login(vm.credentials);
  }



}
