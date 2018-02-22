SellerDashboardManageCustomerCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardManageCustomerCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  
  $scope.$on('$viewContentLoaded',function(){
    
    $scope.customerData = [
      {
        name: 'Timothy',
        phone: '201-4571-457',
        email: 'demo@gmail.com',
        appointment: '12/12/2018'
  
      },
      {
        name: 'Timothy',
        phone: '201-4571-457',
        email: 'demo@gmail.com',
        appointment: '12/12/2018'
  
      },
      {
        name: 'Timothy',
        phone: '201-4571-457',
        email: 'demo@gmail.com',
        appointment: '12/12/2018'
  
      },
      {
        name: 'Timothy',
        phone: '201-4571-457',
        email: 'demo@gmail.com',
        appointment: '12/12/2018'
  
      },
      {
        name: 'Timothy',
        phone: '201-4571-457',
        email: 'demo@gmail.com',
        appointment: '12/12/2018'
  
      },
    ];
  });
  
}
