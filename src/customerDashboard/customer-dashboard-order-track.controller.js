CustomerDashboardOrderTrackCtrl.$inject = ['$state','localStorageService','$scope'];

export default function CustomerDashboardOrderTrackCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-order-view";
  });
  
}
