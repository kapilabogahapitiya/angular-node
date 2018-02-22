SellerDashboardPromotionListCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService'];

export default function SellerDashboardPromotionListCtrl($state, localStorageService, $scope, SellerDashboardService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.promotionList = [];
  $scope.$on('$viewContentLoaded',function(){
    SellerDashboardService.getPromotionList().then(function(res){
      $scope.promotionList = res.data;
      for(var i = 0; i < $scope.promotionList.length; i++){
        $scope.promotionList[i].start_date = formatDate($scope.promotionList[i].start_date);
        $scope.promotionList[i].end_date = formatDate($scope.promotionList[i].end_date);
      }
      console.log(res);
    },
    function(res){
      console.log(res);
      alert('Server Error');
    });
  });

  $scope.doEditPromotion = function(data){
    $state.go('firstNearMember.seller-dashboard-edit-promotion-list',{data:data});
  };
  $scope.doDeletePromotion  = function(data){
    if(confirm("Are you sure?")){
      SellerDashboardService.doDeletePromotion(data);
    }
    
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  
}
