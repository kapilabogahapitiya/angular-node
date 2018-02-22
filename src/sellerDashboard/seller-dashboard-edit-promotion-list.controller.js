SellerDashboardEditPromotionListCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService','$stateParams'];

export default function SellerDashboardEditPromotionListCtrl($state, localStorageService, $scope, SellerDashboardService, $stateParams) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.promotionData = {
    _id: '',
    promotion_name: '',
    promotion_on: 'Professional Photo',
    promotion_limitation: 'One Per Person',
    promotion_detail: '',    
    price_percentage: '',
    price: '',
    start_date: '',
    end_date: '',      
};
  
  $scope.$on('$viewContentLoaded', function(){
    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: false,
            orientation: "left",
            autoclose: true
        });      
      }
      Object.keys($stateParams.data).forEach(function(key) {
        if (key in $scope.promotionData) { // or obj1.hasOwnProperty(key)
          $scope.promotionData[key] = $stateParams.data[key];
        }
      });
      // $scope.promotionData = $stateParams.data;            
  });
  $scope.doSaveAndPublish = function(){
    if (!_.isEmpty($scope.addPromotionForm.$error)) {
      return;
    }    
    SellerDashboardService.doEditPromotion($scope.promotionData);
  };
}
