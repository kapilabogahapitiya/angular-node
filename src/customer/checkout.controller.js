CheckoutCtrl.$inject = ['$state','$document','$scope','$rootScope','localStorageService','CustomerService'];

export default function CheckoutCtrl($state,$document,$scope, $rootScope,localStroageService, CustomerService) {
  /*jshint validthis: true */
    var vm = this;
   $scope.registerData = {
     full_name: '',
     username: '',
     email_address: '',
     business_phone_number: '',
     password: '',

   };
   $scope.$on('$viewContentLoaded', function(){
    $("#phone").intlTelInput({        
        utilsScript: "build/js/utils.js"
      });
   });
   $('input[type="checkbox"]').on('change', function(e){
      if(e.target.checked){
          $('#exampleModalLong').modal();
      }
  });
  $scope.doRegister = function(){
    if(!$scope.agree){
      $scope.agreeShow = true;
      return;
    }
    if(!_.isEmpty($scope.registerForm.$error)) {
      return;
    }
    
    var countryData = $("#phone").intlTelInput("getSelectedCountryData");
    $scope.registerData.business_phone_number = "+" + countryData.dialCode + $scope.registerData.business_phone_number;
    CustomerService.registerCustomer($scope.registerData).then(function(res){
        alert(res.data.message);
        if(res.data.verified){
          $state.go('firstNear.login');
        } else {
          alert('Please do mobile verify!');
          localStroageService.set('login_id',res.data.login_id);
          $state.go('firstNear.account-verification');
        }
    }, function(res) {
       alert('Error!');
    });
     
  };
  $scope.setAgree = function(){
    $scope.agreeShow = !$scope.agree;
  };
  
  
  
}
