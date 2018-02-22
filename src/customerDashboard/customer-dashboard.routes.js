CustomerDashboardRoutes.$inject = ['$stateProvider'];

export default function CustomerDashboardRoutes($stateProvider) {
  $stateProvider
    .state('firstNearMember.customer-dashboard-order-track', {
      url: '/customer-dashboard-order-track',
      views: {
        'nested@firstNearMember': {
          template: require('./customer-dashboard-order-track.html'),
          controllerAs: 'vm',
          controller: 'CustomerDashboardOrderTrackCtrl'
        }
      }
    })
    .state('firstNearMember.customer-dashboard-order-view', {
        url: '/customer-dashboard-order-view',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-order-view.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardOrderViewCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-affiliate-referral', {
        url: '/customer-dashboard-affiliate-referral',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-affiliate-referral.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardAffiliateReferralCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-inbox', {
        url: '/customer-dashboard-inbox',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-inbox.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardInboxCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-edit-profile', {
        url: '/customer-dashboard-edit-profile',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-edit-profile.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardEditProfileCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-favourite', {
        url: '/customer-dashboard-edit-favourite',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-favourite.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardFavouriteCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-request-page', {
        url: '/customer-dashboard-edit-request-page',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-request-page.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardRequestPageCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-customer-support', {
        url: '/customer-dashboard-edit-customer-support',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-customer-support.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardCustomerSupportCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-private-chat', {
        url: '/customer-dashboard-private-chat',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-private-chat.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardPrivateChatCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-become-seller', {
        url: '/customer-dashboard-become-seller',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-become-seller.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardBecomeSellerCtrl'
          }
        }
      })
      .state('firstNearMember.customer-dashboard-new-request', {
        url: '/customer-dashboard-new-request',
        views: {
          'nested@firstNearMember': {
            template: require('./customer-dashboard-new-request.html'),
            controllerAs: 'vm',
            controller: 'CustomerDashboardNewRequestCtrl'
          }
        }
      });;
  
    
    
}