SellerDashboardRecentOrderCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardRecentOrderCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
 
  $scope.recentOrderDatas = [];
  $scope.totalRecentOrderDatas = [];
  $scope.currentPage = 1;
  $scope.numPerPage = 3;  
  $scope.$on('$viewContentLoaded',function(){    
    $scope.makeTotalRecentOrderDatas();
    $scope.totalNum = $scope.totalRecentOrderDatas.length;
    $scope.totalPageNum = Math.floor($scope.totalRecentOrderDatas.length / $scope.numPerPage); 
    updateRecentOrderData();
  });  
  $scope.makeTotalRecentOrderDatas = function() {
    $scope.totalRecentOrderDatas = [];
  
    for (var i = 1;i <= 1000; i = i + 2) {
     
      $scope.totalRecentOrderDatas.push({
        type: 'Delivery Order',
        caption: 'Timothy Hampson',
        date : 'September 11, 2017, 10:54',      
        service_type: '1',
        currency: 'SAR',
        price : '100',
        phone_number: '5214-542-457',
        num: i,
      },
      {
        type: 'Pick Up Order',
        caption: 'Timothy Hampson',
        date : 'September 11, 2017, 10:54',      
        service_type: '2',
        currency: 'SAR',
        price : '100',
        phone_number: '5214-542-457',
        num: i + 2,
      });
    }
  }; 
  $scope.prev = function(){
      if ($scope.currentPage > 1){
        $scope.currentPage = $scope.currentPage - 1;
      }
      updateRecentOrderData();
  };
  $scope.next = function(){
    if ($scope.currentPage < $scope.totalPageNum){
      $scope.currentPage = $scope.currentPage + 1;
    }
    updateRecentOrderData();
  };

  function updateRecentOrderData() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    var end = begin + $scope.numPerPage;
    $scope.recentOrderDatas = $scope.totalRecentOrderDatas.slice(begin, end);
  };
  
}
