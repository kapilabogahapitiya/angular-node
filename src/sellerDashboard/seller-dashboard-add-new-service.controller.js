SellerDashboardAddNewServiceCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService'];

export default function SellerDashboardAddNewServiceCtrl($state, localStorageService, $scope, SellerDashboardService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.service_data = {
    name: '',
    description: '',
    dur_in_hr: '',
    dur_in_min: '',
    price: '',
    deposite_price: '',
    location_option: 'merchant',
  }; 
  $scope.$on('$viewContentLoaded',function(){
    
  });
  $scope.doAddService = function(){
    if (!_.isEmpty($scope.addServiceForm.$error)) {
      return;
    } 
    SellerDashboardService.doAddService($scope.service_data);
  }
  $scope.setLocationKind = function(str){    
    $scope.service_data.location_option = str;
  };
  
  
}
