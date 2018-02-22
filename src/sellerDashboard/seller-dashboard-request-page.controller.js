SellerDashboardRequestPageCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardRequestPageCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.$on('$viewContentLoaded',function(){
    // $scope.cur_sidebar = "firstNearMember.customer-dashboard-request-page";
  });
  
  
}
