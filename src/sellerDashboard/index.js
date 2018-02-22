// import angular from 'angular';
import RestApiService from '../core/services/rest-api.service';
import core from '../core';
import angularFileUpload from '../../node_modules/angular-file-upload/dist/angular-file-upload.min';
import angularLocalStorage from 'angular-local-storage';
import SellerDashboardAddNewServiceCtrl from './seller-dashboard-add-new-service.controller';
import SellerDashboardManageServiceCtrl from './seller-dashboard-manage-service.controller';
import SellerDashboardRecentOrderCtrl from './seller-dashboard-recent-order.controller';
import SellerDashboardRecentBookingCtrl from './seller-dashboard-recent-booking.controller';
import SellerDashboardFavouriteCtrl from './seller-dashboard-favourite.controller';
import SellerDashboardRequestPageCtrl from './seller-dashboard-request-page.controller';
import SellerDashboardManageCustomerCtrl from './seller-dashboard-manage-customer.controller';
import SellerDashboardManageReviewCtrl from './seller-dashboard-manage-review.controller';
import SellerDashboardPromotionListCtrl from './seller-dashboard-promotion-list.controller';
import SellerDashboardAddPromotionListCtrl from './seller-dashboard-add-promotion-list.controller';
import SellerDashboardManageSubscriptionCtrl from './seller-dashboard-manage-subscription.controller';
import SellerDashboardBusinessSetupCtrl from './seller-dashboard-business-setup.controller';
import SellerDashboardInboxCtrl from './seller-dashboard-inbox.controller';
import SellerDashboardEditProfileCtrl from './seller-dashboard-edit-profile.controller';
import SellerDashboardAffiliateReferralCtrl from './seller-dashboard-affiliate-referral.controller';
import SellerDashboardCustomerSupportCtrl from './seller-dashboard-customer-support.controller';
import SellerDashboardPrivateChatCtrl from './seller-dashboard-private-chat.controller';
import SellerDashboardRecentJobsCtrl from './seller-dashboard-recent-jobs.controller';
import SellerDashboardAddNewFoodServiceCtrl from './seller-dashboard-add-new-food-service.controller';
import SellerDashboardEditServiceCtrl from './seller-dashboard-edit-service.controller';
import SellerDashboardEditPromotionListCtrl from './seller-dashboard-edit-promotion-list.controller';
import SellerDashboardManageFoodServiceCtrl from './seller-dashboard-manage-food-service.controller';
import SellerDashboardEditFoodServiceCtrl from './seller-dashboard-edit-food-service.controller';
import SellerDashboardRecentJobsFullCtrl from './seller-dashboard-recent-jobs-full.controller';
import SellerDashboardHeader from './directives/seller-dashboard-header';
import SellerDashboardSidebar from './directives/seller-dashboard-sidebar';
import SellerSearchProfile from './directives/seller-search-profile';
import routing from './seller-dashboard.routes';
import SellerDashboardService from './seller-dashboard.service';
export default angular.module('firstNear.sellerDashboard', [core, 'LocalStorageModule','angularFileUpload'])
  .directive('sellerDashboardHeader',SellerDashboardHeader)
  .directive('sellerDashboardSidebar',SellerDashboardSidebar)
  .directive('sellerSearchProfile',SellerSearchProfile)
  .directive('ngThumb', ['$window', function($window) {
      var helper = {
          support: !!($window.FileReader && $window.CanvasRenderingContext2D),
          isFile: function(item) {
              return angular.isObject(item) && item instanceof $window.File;
          },
          isImage: function(file) {
              var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
          }
      };

      return {
          restrict: 'A',
          template: '<canvas/>',
          link: function(scope, element, attributes) {
              if (!helper.support) return;

              var params = scope.$eval(attributes.ngThumb);

              if (!helper.isFile(params.file)) return;
              if (!helper.isImage(params.file)) return;

              var canvas = element.find('canvas');
              var reader = new FileReader();

              reader.onload = onLoadFile;
              reader.readAsDataURL(params.file);

              function onLoadFile(event) {
                  var img = new Image();
                  img.onload = onLoadImage;
                  img.src = event.target.result;
              }

              function onLoadImage() {
                  var width = params.width || this.width / this.height * params.height;
                  var height = params.height || this.height / this.width * params.width;
                  canvas.attr({ width: width, height: height });
                  canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
              }
          }
      };
  }])
  .service('SellerDashboardService', SellerDashboardService)
  .controller('SellerDashboardAddNewServiceCtrl',SellerDashboardAddNewServiceCtrl)
  .controller('SellerDashboardManageServiceCtrl', SellerDashboardManageServiceCtrl)
  .controller('SellerDashboardRecentOrderCtrl',SellerDashboardRecentOrderCtrl)
  .controller('SellerDashboardRecentBookingCtrl',SellerDashboardRecentBookingCtrl)
  .controller('SellerDashboardFavouriteCtrl', SellerDashboardFavouriteCtrl)
  .controller('SellerDashboardRequestPageCtrl',SellerDashboardRequestPageCtrl)
  .controller('SellerDashboardManageCustomerCtrl',SellerDashboardManageCustomerCtrl)
  .controller('SellerDashboardManageReviewCtrl',SellerDashboardManageReviewCtrl)
  .controller('SellerDashboardPromotionListCtrl',SellerDashboardPromotionListCtrl)
  .controller('SellerDashboardAddPromotionListCtrl', SellerDashboardAddPromotionListCtrl)
  .controller('SellerDashboardManageSubscriptionCtrl', SellerDashboardManageSubscriptionCtrl)
  .controller('SellerDashboardBusinessSetupCtrl',SellerDashboardBusinessSetupCtrl)
  .controller('SellerDashboardAffiliateReferralCtrl', SellerDashboardAffiliateReferralCtrl)
  .controller('SellerDashboardInboxCtrl', SellerDashboardInboxCtrl)
  .controller('SellerDashboardEditProfileCtrl', SellerDashboardEditProfileCtrl)
  .controller('SellerDashboardPrivateChatCtrl', SellerDashboardPrivateChatCtrl)
  .controller('SellerDashboardCustomerSupportCtrl', SellerDashboardCustomerSupportCtrl)
  .controller('SellerDashboardRecentJobsCtrl', SellerDashboardRecentJobsCtrl)  
  .controller('SellerDashboardAddNewFoodServiceCtrl', SellerDashboardAddNewFoodServiceCtrl)
  .controller('SellerDashboardEditServiceCtrl', SellerDashboardEditServiceCtrl)
  .controller('SellerDashboardEditPromotionListCtrl', SellerDashboardEditPromotionListCtrl)
  .controller('SellerDashboardManageFoodServiceCtrl', SellerDashboardManageFoodServiceCtrl)
  .controller('SellerDashboardEditFoodServiceCtrl', SellerDashboardEditFoodServiceCtrl)
  .controller('SellerDashboardRecentJobsFullCtrl', SellerDashboardRecentJobsFullCtrl)
  .config(routing)
  .name;
