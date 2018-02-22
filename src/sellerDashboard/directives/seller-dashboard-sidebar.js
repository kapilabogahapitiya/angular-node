export default function SellerDashboardSidebar() {
    return {
      template: require('./seller-dashboard-sidebar.html'),
      restrict: 'E',
      replace: true,
      controller: SellerDashboardSidebarCtrl,
      controllerAs: 'vm'
    };
  }
  
  
  SellerDashboardSidebarCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService','$window','$location'];
  
  
  function SellerDashboardSidebarCtrl($scope,FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService, $window, $location) {
  
    var vm = this;
    $scope.quickLinksData = [
      {
        caption : 'Customer -> My Order',
        url : 'firstNearMember.seller-dashboard-recent-order',
      },
      {
        caption : 'Customer -> Favourite',
        url : 'firstNearMember.seller-dashboard-favourite',
      },
      {
        caption : 'Customer -> Request',
        url : 'firstNearMember.seller-dashboard-request-page',
      },
      {
        caption : 'Merchant -> Recent Order',
        url : 'firstNearMember.seller-dashboard-recent-order',
      },
      {
        caption : 'Merchant -> Recent Booking',
        url : 'firstNearMember.seller-dashboard-recent-booking',
      },
      {
        caption : 'Merchant -> Manage Service',
        url : 'firstNearMember.seller-dashboard-manage-service',
      },
      {
        caption : 'Merchant -> Manage Customer',
        url : 'firstNearMember.seller-dashboard-manage-customer',
      },
      {
        caption : 'Merchant -> Manage Review',
        url : 'firstNearMember.seller-dashboard-manage-review',
      },
      {
        caption : 'Merchant -> Promotion',
        url : 'firstNearMember.seller-dashboard-promotion-list',
      },
      {
        caption : 'Merchant -> Manage Subscription',
        url : 'firstNearMember.seller-dashboard-manage-subscription',
      },
      {
        caption : 'Merchant -> Business Setup',
        url : 'firstNearMember.seller-dashboard-business-setup',
      },
      {
        caption : 'Inbox',
        url : 'firstNearMember.seller-dashboard-inbox',
      },
      {
        caption : 'Affiliate / Referral',
        url : 'firstNearMember.seller-dashboard-affiliate-referral',
      },
      {
        caption : 'Customer Support',
        url : 'firstNearMember.seller-dashboard-customer-support',
      },
      {
        caption: 'Logout',
        url: 'firstNear.login'
      }



    ];    
    $scope.$on('$viewContentLoaded', function(event) {
     
      $('.dropdown-menu').find('input').click(function(e) {
        e.stopPropagation();
      });
    });
        
    $scope.doBusinessInfo = function(){      
      $state.go('firstNearMember.seller-dashboard-business-setup',{data: 'businessInfo'});
    };
    $scope.doGeneralSettings = function(){
      $state.go('firstNearMember.seller-dashboard-business-setup',{data: 'generalSettings'});
    };
    
  }
  
  
  