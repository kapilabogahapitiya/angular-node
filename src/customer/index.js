// import angular from 'angular';
import RestApiService from '../core/services/rest-api.service';
import core from '../core';
import routing from './customer.routes';
import angularLocalStorage from 'angular-local-storage';
import CustomerService from './customer.service';
import BrowseServicesCtrl from './browse-services.controller';
import ProfilePhotographyMakeupCtrl from './profile-photography-makeup.controller';
import RequestQuoteCtrl from './request-quote.controller';
import ProfileFoodCtrl from './profile-food.controller';
import BookingCtrl from './booking.controller';
import CheckoutCtrl from './checkout.controller';
import AccountVerificationCtrl from './account-verification.controller';
export default angular.module('firstNear.customer', [core, 'LocalStorageModule'])
  .service('CustomerService', CustomerService)
  .controller('BrowseServicesCtrl',BrowseServicesCtrl)
  .controller('ProfilePhotographyMakeupCtrl',ProfilePhotographyMakeupCtrl)
  .controller('RequestQuoteCtrl',RequestQuoteCtrl)  
  .controller('ProfileFoodCtrl', ProfileFoodCtrl)
  .controller('BookingCtrl', BookingCtrl)
  .controller('CheckoutCtrl', CheckoutCtrl)
  .controller('AccountVerificationCtrl', AccountVerificationCtrl)
  .config(routing)
  .name;
