SellerDashboardEditServiceCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService','$stateParams'];

export default function SellerDashboardEditServiceCtrl($state, localStorageService, $scope, SellerDashboardService, $stateParams) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.service_data = {
    service_id: '',
    name: '',
    description: '',
    dur_in_hr: '',
    dur_in_min: '',
    price: '',
    deposite_price: '',
    location_option: 'merchant',
  }; 
  $scope.$on('$viewContentLoaded',function(){
    var data = $stateParams.data;
    if(data){
      $scope.service_data.name = data.serviceName;
      $scope.service_data.service_id = data.serviceID;
      $scope.service_data.description = data.content.service_description;
      $scope.service_data.dur_in_hr = data.content.service_duration_in_hr;
      $scope.service_data.dur_in_min = data.content.service_duration_in_min;
      $scope.service_data.price = data.content.price;
      $scope.service_data.deposite_price = data.content.deposite_price;
      $scope.service_data.location_option = data.content.location_option;
    }
    // console.log($stateParams);
  });
  $scope.doEditService = function(){
    if (!_.isEmpty($scope.addServiceForm.$error)) {
      return;
    } 
    SellerDashboardService.doEditService($scope.service_data);
  }
  $scope.setLocationKind = function(str){    
    $scope.service_data.location_option = str;
  };
  
  
}
