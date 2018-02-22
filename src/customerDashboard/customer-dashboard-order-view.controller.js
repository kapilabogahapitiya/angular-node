CustomerDashboardOrderViewCtrl.$inject = ['$state','localStorageService','$scope'];

export default function CustomerDashboardOrderViewCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.orderDatas = [];
  $scope.totalOrderDatas = [];
  $scope.currentPage = 1;
  $scope.numPerPage = 5;  
  $scope.statusData = ['Pending','Delivered','Canceled'];
  $scope.buttonCaption = ['Cancel','Review','Make Complain'];
  $scope.class = ['status-order-pending','status-order-deliverd','status-order-canceled'];  
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-order-view";
    $scope.makeTotalOrderDatas();
    $scope.totalNum = $scope.totalOrderDatas.length;
    $scope.totalPageNum = Math.floor($scope.totalOrderDatas.length / $scope.numPerPage); 
    updateOrderData();
    console.log($scope.orderDatas);
  });  
  $scope.makeTotalOrderDatas = function() {
    $scope.totalOrderDatas = [];
    
    for (var i = 1;i <= 1000; i++) {
      var keyInt = getRandomInt(0,2);
      var flag = true;
      if(keyInt == 0) flag = true;
      else flag = false;
      $scope.totalOrderDatas.push({
         name: " Diet Point Restaurant",
         datetime : ' September 11, 2017, 10:54',
         price :'SAR 100', 
         num: i,
         status: $scope.statusData[keyInt],
         buttonCaption: $scope.buttonCaption[keyInt],
         lastUpdate:'Last update by merchat at 9:30PM',
         class: $scope.class[keyInt],
         flag : flag
        });
    }
  }; 
  $scope.prev = function(){
      if ($scope.currentPage > 1){
        $scope.currentPage = $scope.currentPage - 1;
      }
      updateOrderData();
  };
  $scope.next = function(){
    if ($scope.currentPage < $scope.totalPageNum){
      $scope.currentPage = $scope.currentPage + 1;
    }
    updateOrderData();
  };

  function updateOrderData() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    var end = begin + $scope.numPerPage;
    $scope.orderDatas = $scope.totalOrderDatas.slice(begin, end);
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  
  
}
