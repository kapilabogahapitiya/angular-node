// import angular from 'angular';
import RestApiService from '../core/services/rest-api.service';
import core from '../core';
import routing from './customer-dashboard.routes';
import angularLocalStorage from 'angular-local-storage';
import Dashboardheader from './directives/dashboard-header';
import Searchprofile from './directives/search-profile';
import Dashboardsidebar from './directives/dashboard-sidebar';
import upwardsScroll from '../core/directives/upwards-scroll.min';
import CustomerDashboardOrderTrackCtrl from './customer-dashboard-order-track.controller';
import CustomerDashboardOrderViewCtrl from './customer-dashboard-order-view.controller';
import CustomerDashboardAffiliateReferralCtrl from './customer-dashboard-affiliate-referral.controller';
import CustomerDashboardInboxCtrl from './customer-dashboard-inbox.controller';
import CustomerDashboardEditProfileCtrl from './customer-dashboard-edit-profile.controller';
import CustomerDashboardFavouriteCtrl from './customer-dashboard-favourite.controller';
import CustomerDashboardRequestPageCtrl from './customer-dashboard-request-page.controller';
import CustomerDashboardCustomerSupportCtrl from './customer-dashboard-customer-support.controller';
import CustomerDashboardPrivateChatCtrl from './customer-dashboard-private-chat.controller';
import CustomerDashboardBecomeSellerCtrl from './customer-dashboard-become-seller.controller';
import CustomerDashboardNewRequestCtrl from './customer-dashboard-new-request.controller';
import CustomerDashboardService from './customer-dashboard.service';
export default angular.module('firstNear.customerDashboard', [core, 'LocalStorageModule','upwards-scroll'])
  .service('CustomerDashboardService', CustomerDashboardService)
  .controller('CustomerDashboardOrderTrackCtrl',CustomerDashboardOrderTrackCtrl)
  .controller('CustomerDashboardOrderViewCtrl',CustomerDashboardOrderViewCtrl)
  .controller('CustomerDashboardAffiliateReferralCtrl',CustomerDashboardAffiliateReferralCtrl)
  .controller('CustomerDashboardInboxCtrl',CustomerDashboardInboxCtrl)
  .controller('CustomerDashboardEditProfileCtrl',CustomerDashboardEditProfileCtrl)
  .controller('CustomerDashboardFavouriteCtrl', CustomerDashboardFavouriteCtrl)  
  .controller('CustomerDashboardRequestPageCtrl',CustomerDashboardRequestPageCtrl)
  .controller('CustomerDashboardCustomerSupportCtrl', CustomerDashboardCustomerSupportCtrl)
  .controller('CustomerDashboardPrivateChatCtrl', CustomerDashboardPrivateChatCtrl)
  .controller('CustomerDashboardBecomeSellerCtrl', CustomerDashboardBecomeSellerCtrl)
  .controller('CustomerDashboardNewRequestCtrl', CustomerDashboardNewRequestCtrl)
  .directive('dashboardHeader',Dashboardheader)
  .directive('searchProfile',Searchprofile)
  .directive('dashboardSidebar',Dashboardsidebar)  
  .config(routing)
  .name;
