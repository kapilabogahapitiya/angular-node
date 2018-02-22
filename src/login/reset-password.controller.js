ResetPasswordCtrl.$inject = ['$state', 'LoginService','$scope','$location'];

export default function ResetPasswordCtrl($state, LoginService,$scope, $location) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.passwordResetData = {
    password: '',
    _token: '',
  };
  
  $scope.$on('$viewContentLoaded',function(){
    var _token = $location.search()._token;
    if(_token != undefined){
      vm.passwordResetData._token = _token;
    }
    else {
      alert('Token Error!');
      $state.go('firstNear.index');
    } 
  });
  vm.doResetPassword = doResetPassword;

  function doResetPassword() {
    
    if(!_.isEmpty($scope.resetForm.$error)) {
      return;
    }
    if($scope.rePassword != vm.passwordResetData.password){
      return;
    }    
    LoginService.doResetPassword(vm.passwordResetData);
  }
}
