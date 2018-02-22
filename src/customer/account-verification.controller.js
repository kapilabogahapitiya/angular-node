AccountVerificationCtrl.$inject = ['$state','localStorageService','$scope','$document','CustomerService'];

export default function AccountVerificationCtrl($state, localStorageService, $scope, $document, CustomerService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.verifyData = {
    authCode: '',
    login_id : '',
  };
  var login_id;
  $scope.$on("$viewContentLoaded", function(){
     login_id = localStorageService.get('login_id');
    if(login_id == null){
      $state.go('firstNear.checkout');
    };    
    
  });
  $scope.doVerify = function(){
    if(!_.isEmpty($scope.verifyForm.$error)){
      return;
    }
    $scope.verifyData.login_id = login_id;
    CustomerService.verifyPhoneNumber($scope.verifyData).then(function(res){
        if(res.data){
           alert("You are verified!");
           $state.go("firstNear.login");           
        } else {
          alert("Auth Code is not Correct!");
        }
    },function(res){
        alert("Server Error!");

    });
  };
  
  
}
