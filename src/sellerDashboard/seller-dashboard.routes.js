SellerDashboardRoutes.$inject = ['$stateProvider'];

export default function SellerDashboardRoutes($stateProvider) {
  $stateProvider
    .state('firstNearMember.seller-dashboard-add-new-service', {
      url: '/seller-dashboard-add-new-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-add-new-service.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardAddNewServiceCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-manage-service', {
      url: '/seller-dashboard-manage-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-manage-service.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardManageServiceCtrl'
        }
      }
    }) 
    .state('firstNearMember.seller-dashboard-recent-order', {
      url: '/seller-dashboard-recent-order',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-recent-order.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardRecentOrderCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-recent-booking', {
      url: '/seller-dashboard-recent-booking',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-recent-booking.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardRecentBookingCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-favourite',{
      url : '/seller-dashboard-favourite',
      views: {
        'nested@firstNearMember' : {
          template: require('./seller-dashboard-favourite.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardFavouriteCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-request-page',{
      url : '/seller-dashboard-request-page',
      views: {
        'nested@firstNearMember' : {
          template: require('./seller-dashboard-request-page.html'),
          controllerAs: 'vm',
          controller: 'SellerDashboardRequestPageCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-manage-customer',{
      url: '/seller-dashboard-manage-customer',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-manage-customer.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardManageCustomerCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-manage-review',{
      url: '/seller-dashboard-manage-review',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-manage-review.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardManageReviewCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-promotion-list',{
      url: '/seller-dashboard-promotion-list',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-promotion-list.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardPromotionListCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-add-promotion-list',{
      url: '/seller-dashboard-add-promotion-list',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-add-promotion-list.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardAddPromotionListCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-manage-subscription',{
      url: '/seller-dashboard-manage-subscription',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-manage-subscription.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardManageSubscriptionCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-business-setup',{
      url: '/seller-dashboard-business-setup',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-business-setup.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardBusinessSetupCtrl'
        }
      },
      params: { data: null},
    })
    .state('firstNearMember.seller-dashboard-inbox',{
      url: '/seller-dashboard-inbox',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-inbox.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardInboxCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-edit-profile',{
      url: '/seller-dashboard-edit-profile',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-edit-profile.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardEditProfileCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-affiliate-referral',{
      url: '/seller-dashboard-affiliate-referral',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-affiliate-referral.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardAffiliateReferralCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-customer-support',{
      url: '/seller-dashboard-customer-support',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-customer-support.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardCustomerSupportCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-private-chat',{
      url: '/seller-dashboard-private-chat',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-private-chat.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardPrivateChatCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-recent-jobs',{
      url: '/seller-dashboard-recent-jobs',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-recent-jobs.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardRecentJobsCtrl'
        }
      }
    })    
    .state('firstNearMember.seller-dashboard-add-new-food-service',{
      url: '/seller-dashboard-add-new-food-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-add-new-food-service.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardAddNewFoodServiceCtrl'
        }
      }
    })
    .state('firstNearMember.seller-dashboard-edit-service',{
      url: '/seller-dashboard-edit-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-edit-service.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardEditServiceCtrl',         
        }
      }, 
      params: { data: null},
    })
    .state('firstNearMember.seller-dashboard-edit-promotion-list',{
      url: '/seller-dashboard-edit-promotion-list',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-edit-promotion-list.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardEditPromotionListCtrl',         
        }
      }, 
      params: { data: null},
    })
    .state('firstNearMember.seller-dashboard-manage-food-service',{
      url: '/seller-dashboard-manage-food-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-manage-food-service.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardManageFoodServiceCtrl',         
        }
      }, 
      params: { data: null},
    })
    .state('firstNearMember.seller-dashboard-edit-food-service',{
      url: '/seller-dashboard-edit-food-service',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-edit-food-service.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardEditFoodServiceCtrl',         
        }
      }, 
      params: { data: null},
    })
    .state('firstNearMember.seller-dashboard-recent-jobs-full',{
      url: '/seller-dashboard-recent-jobs-full',
      views: {
        'nested@firstNearMember': {
          template: require('./seller-dashboard-recent-jobs-full.html'),
          controlerAs: 'vm',
          controller: 'SellerDashboardRecentJobsFullCtrl',         
        }
      }, 
      params: { data: null},
    });
    
  
    
    
}