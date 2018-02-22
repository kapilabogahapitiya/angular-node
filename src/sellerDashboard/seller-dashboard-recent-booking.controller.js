SellerDashboardRecentBookingCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardRecentBookingCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.recentBookingData = [
    {
      title : 'Marriage Anniversary',
      date : 'Fri 2017 Sep 25, 11:31 am',
      status: ' Passed',
      class: 'passed'
    },
    {
      title : 'Marriage Anniversary',
      date : 'Fri 2017 Sep 25, 11:31 am',
      status: ' Passed',
      class: 'passed'
    },
    {
      title : 'Marriage Anniversary',
      date : 'Fri 2017 Sep 25, 11:31 am',
      status: ' Coming soon',
      class: 'comingsoon'
    },
    {
      title : 'Marriage Anniversary',
      date : 'Fri 2017 Sep 25, 11:31 am',
      status: ' Canceled',
      class: 'canceled'
    },   
   

  ];
  $scope.$on('$viewContentLoaded',function(){
    
  });
  
}
