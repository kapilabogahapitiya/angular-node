SellerDashboardAddPromotionListCtrl.$inject = ['$state','localStorageService','$scope','$document','SellerDashboardService'];

export default function SellerDashboardAddPromotionListCtrl($state, localStorageService, $scope, $document, SellerDashboardService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.promotionData = {
      promotion_name: '',
      promotion_on: 'Professional Photo',
      promotion_limitation: 'One Per Person',
      promotion_detail: '',    
      price_percentage: '',
      price: '',
      start_date: '',
      end_date: '',      
  };
  $scope.$on('$viewContentLoaded',function(){
    if (jQuery().datepicker) {
      $('.date-picker').datepicker({
          rtl: false,
          orientation: "left",
          autoclose: true
      });      
    }
  });
  $scope.doSaveAndPublish = function(){
    if (!_.isEmpty($scope.addPromotionForm.$error)) {
      return;
    } 
    SellerDashboardService.doSaveAndPublishPromotion($scope.promotionData);
  };
  angular.element($document).bind("ready",function(){
    if (jQuery().datepicker) {
      $('.date-picker').datepicker({
          rtl: false,
          orientation: "left",
          autoclose: true
      });
      //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
    }
  });

  
}
