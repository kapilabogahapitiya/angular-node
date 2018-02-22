SellerDashboardAffiliateReferralCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardAffiliateReferralCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.affiliateReferralData = {
    num_customers: '15',
    num_merchants: '3',
    balance_currency: 'SAR',
    balance_price: '150'
  };
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-affiliate-referral";
  });
  
}
