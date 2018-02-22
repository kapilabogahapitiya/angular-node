RequestQuoteCtrl.$inject = ['$state','localStorageService','$scope','$document','CustomerService'];

export default function RequestQuoteCtrl($state, localStorageService, $scope, $document, CustomerService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.quoteData = {
    title: '',
    description: '',
    service: 'photography',
    date_needed: '',
    location_name: '',
    formatted_address: '',
    google_lat: '',
    google_lng: '',
    send_only_to: 'male',
    customer_phone: '',
    customer_email: '',
  };
  
  $scope.$on('$viewContentLoaded',function(){
    $scope.agreeShow = false;
    $scope.latitude = '0';
    $scope.longitude = '0';
    $scope.location_show_flag = false;  
    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: false,
            orientation: "left",
            autoclose: true
        });
        
    }
  });
  $scope.$on('addressAdded', function() {    
    $scope.location_show_flag = false;
  });
  $scope.setGender = function(gender){
    $scope.quoteData.send_only_to = gender;

  };
  $scope.setShow = function(){
    $scope.agreeShow = !$scope.agreeFlag;
  };
  $scope.doQuote = function(){
    if($scope.agreeShow == true || $scope.agreeFlag == undefined){
      $scope.agreeShow = true;
      return;
    }
    if(!_.isEmpty($scope.quoteFrm.$error)) {
      return;
    }
    $scope.quoteData.location_name = $('#googleCity').val();
    if($scope.quoteData.location_name == ""){      
      $scope.location_show_flag = true;
      return;  
    }
    $scope.quoteData.formatted_address = $('#googleMapAddress').val();
    $scope.quoteData.google_lat = $('#googleLatitude').val();
    $scope.quoteData.google_lng = $('#googleLongitude').val();   
    CustomerService.addAnonymousQuote($scope.quoteData).then(function(res){
      alert("Your Quote is sent to the Merchant successfully!");
      $state.go('firstNear.login');
    },function(res){
      alert("Error!");
      console.log(res);
    });
  }; 
  angular.element($document).bind("ready",function(){
      if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: false,
            orientation: "left",
            autoclose: true
        });
        
    }
  });
  
  
}
