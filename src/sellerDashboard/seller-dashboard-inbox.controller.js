SellerDashboardInboxCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardInboxCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.inboxDatas = [];
  $scope.totalInboxDatas = [];
  $scope.currentPage = 1;
  $scope.numPerPage = 10;  
  $scope.nameData = ['John Smith','Knox Harrington','Donny Kerabatsos','Brandt Hoffman'];
  $scope.ampm = ['AM','PM'];  
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-inbox";
    $scope.makeTotalInboxDatas();
    $scope.totalNum = $scope.totalInboxDatas.length;
    $scope.totalPageNum = Math.floor($scope.totalInboxDatas.length / $scope.numPerPage); 
    updateInboxData();
  });  
  $scope.makeTotalInboxDatas = function() {
    $scope.totalInboxDatas = [];
    var readFlag = false;
    for (var i = 1;i <= 1000; i++) {
      if( i <= 6) readFlag = true;
      else readFlag = false;
      $scope.totalInboxDatas.push({
         name: $scope.nameData[getRandomInt(0,3)],
         message : 'Lorem Ipsum is simply dummy text of the printing....', 
         num: i,
         time : getRandomInt(1,12) + ':' + getRandomInt(10,59) + ' ' + $scope.ampm[getRandomInt(0,1)],
         readFlag : readFlag
        });
    }
  }; 
  $scope.prev = function(){
      if ($scope.currentPage > 1){
        $scope.currentPage = $scope.currentPage - 1;
      }
      updateInboxData();
  };
  $scope.next = function(){
    if ($scope.currentPage < $scope.totalPageNum){
      $scope.currentPage = $scope.currentPage + 1;
    }
    updateInboxData();
  };

  function updateInboxData() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    var end = begin + $scope.numPerPage;
    $scope.inboxDatas = $scope.totalInboxDatas.slice(begin, end);
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
 
}