CreateYourAccountCtrl.$inject = ['$state','SignUpService','$scope','localStorageService','$location'];

export default function CreateYourAccountCtrl($state,SignUpService,$scope, localStorageService, $location) {
  /*jshint validthis: true */
  var vm = this;
  vm.accountData = {
    full_name: '',
    username: '',
    email_address: '',
    business_phone_number: '',
    password: '',
    gender: '',
    hearOption: '',
  };
  
  $scope.hearOptions = [
    {id: 0, name: 'Demo 1'},
    {id: 1, name: 'Demo 2'},
    {id: 2, name: 'Demo 3'}
  ]; 
 $scope.agreeShow = false;
  vm.doCreateAccount = doCreateAccount; 
  vm.pageLoaded = false;
  vm.agreeChange = agreeChange;
  $scope.$on('$viewContentLoaded', function(){    
    var verified = localStorageService.get('verified');
    if(verified == true){
      $state.go('firstNear.login');
    }    
    var tempData = localStorageService.get("accountData");
    if( tempData != null ) {
      vm.accountData = tempData;
      vm.accountData.hearOption = $scope.hearOptions[tempData.hearOption.id];    
      // console.log(tempData);
    } else {
      vm.accountData.hearOption = $scope.hearOptions[0];
      vm.accountData.gender = "male";     
    }    
  });
  function doCreateAccount(){
   
   if(!$scope.agree){
     $scope.agreeShow = true;
     return;
   }
    if(!_.isEmpty(vm.createYourAccountFrm.$error)) {
      return;
    }
  
    SignUpService.createAccount(vm.accountData);
     
  }
  function agreeChange(){
    $scope.agreeShow = !$scope.agree;
  }
}
