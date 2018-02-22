VerifyPhoneNumberCtrl.$inject = ['$state','SignUpService','$scope','localStorageService'];

export default function VerifyPhoneNumberCtrl($state, SignUpService, $scope, localStorageService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.authCode = ""; 
  vm.doVerifyPhoneNumber = doVerifyPhoneNumber;
  vm.doSendAuthCode = doSendAuthCode;  
  vm.pageLoaded = false;
  $scope.$on('$viewContentLoaded',function(){
    var verified = localStorageService.get('verified');
    if(verified == true){
      $state.go('firstNear.login');
    }
  });
  function doVerifyPhoneNumber(){
   
    if(!_.isEmpty(vm.verifyPhoneNumberFrm.$error)) {
      return;
    }
  
    SignUpService.verifyPhoneNumber(vm.authCode);
    
  }
  function doSendAuthCode(){
    SignUpService.sendAuthCode();
  }
}
