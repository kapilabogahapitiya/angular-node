ForgotPasswordCtrl.$inject = ['$state', 'LoginService','$scope'];

export default function ForgotPasswordCtrl($state, LoginService,$scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.emailAddress = '';
  vm.doResetPassword = doResetPassword

  function doResetPassword() {
    // $state.go('firstNear.reset-password');
    if(!_.isEmpty($scope.myForm.$error)) {
      return;
    }
    LoginService.doForgotPwd(vm.emailAddress);
  }
}
