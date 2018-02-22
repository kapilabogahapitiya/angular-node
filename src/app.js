import mainCss from './sb-admin/styles/main.css';
import normalizeCss from './sb-admin/styles/normalize.css';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import animateCss from './sb-admin/styles/animate.min.css';
import datepickerCss from './sb-admin/styles/css/datepicker.css';
import datepicker3Css from './sb-admin/styles/css/datepicker3.css';
import fontAwesome from 'font-awesome/css/font-awesome.min.css';
import fontAwesomeWebpack from 'font-awesome-webpack';
// import flaticon from './sb-admin/styles/font/flaticon.css';
import owlCarousel from './sb-admin/vendor/OwlCarousel/owl.carousel.min.css';
import owlCarouselTheme from './sb-admin/vendor/OwlCarousel/owl.theme.default.min.css';
import meanMenu from './sb-admin/styles/meanmenu.min.css';
import nivoSlider from './sb-admin/vendor/slider/css/nivo-slider.css';
import nivoSliderPreview from './sb-admin/vendor/slider/css/preview.css';
import switchStyle from './sb-admin/styles/switch-style.css';
import style from './sb-admin/styles/style.css';
import custom from './sb-admin/styles/custom.css';
import customize from './sb-admin/styles/customize.css';
import style2 from './sb-admin/styles/style-2.css';
import sbadminstyle from './sb-admin/styles/sb-admin.css';
import chatcss from './sb-admin/styles/chat.css';
import ngUiNotificationCss from 'ng-ui-notification/dist/angular-ui-notification.min.css';
import intelInputCss from './sb-admin/styles/intlTelInput.css';
import jQuery from 'jquery';
import angular from 'angular';
import bootstrap from 'bootstrap';
import pluginsJS from "./sb-admin/vendor/plugins.js";
import jqueryNivoSliderJS from "./sb-admin/vendor/slider/js/jquery.nivo.slider";
import jqueryDatepickerJS from "./sb-admin/vendor/bootstrap-datepicker";
import intelInputJS from "./sb-admin/vendor/intlTelInput";
import sliderHomeJS from "./sb-admin/vendor/slider/home.js";
import owlCarouselJS from "./sb-admin/vendor/OwlCarousel/owl.carousel.min.js";
import meanMenuJS from "./sb-admin/vendor/jquery.meanmenu.min.js";
import scrollUpJS from "./sb-admin/vendor/jquery.scrollUp.min.js";
import counterUpJS from "./sb-admin/vendor/jquery.counterup.min.js";
import jssor from "./sb-admin/vendor/jssor.slider-23.1.6.min.js";
import html5lightbox from "./sb-admin/vendor/html5lightbox.js";
import ngUiNotification from 'ng-ui-notification/dist/angular-ui-notification.min';
import constants from './constants';
import common from './common';
import core from './core';
import welcome from './welcome';
import login from './login';
import index from './index';
import customerDashboard from './customerDashboard';
import sellerDashboard from './sellerDashboard';
import customer from './customer';
import pascalprecht from '../node_modules/angular-translate/dist/angular-translate';
import useStaticFilesLoader from '../node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files';
import clipBoard from '../node_modules/ngclipboard/node_modules/clipboard/dist/clipboard.min';
import ngClipBoard from '../node_modules/ngclipboard/dist/ngclipboard.min';
import angularGoogleMap from './core/directives/angular-google-map';
angular
  .module('firstNear', [
    /* Shared modules*/
    constants,
    'firstNear.common',
    'firstNear.core',
    /* Feature areas.
       Don't just put module in here - think about whether it should be loaded on demand */
    'firstNear.login',
    'firstNear.welcome',
    'firstNear.index',   
    'firstNear.customerDashboard',
    'firstNear.sellerDashboard',
    'firstNear.customer',
    'pascalprecht.translate',
    'angular-google-map',
    'ngclipboard'    
        
  ])
  .config(function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'constants/local_',
        suffix: '.json'
      });
      // $translateProvider.translations('en', en_data);
      // $translateProvider.translations('ar', ar_data);
      $translateProvider.preferredLanguage('en');   
      $translateProvider.forceAsyncReload(true);
  })
  .controller('LanguageCtrl', function($scope, $translate){
  
    $scope.changeLanguage = function(languageKey){    
    $translate.use(languageKey);    
    $('#langCaptionId').html(languageKey + '<i class="fa fa-angle-down" aria-hidden="true"></i>');
    
    };
   
  })
  .run(function($rootScope,$state,localStorageService,$http){
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var token  = localStorageService.get('token');
      $http.defaults.headers.common['Auth-Token'] = token;
      
    });
  })
  .config(function($httpProvider){
    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
      var $http, $state;
  
      // this trick must be done so that we don't receive
      // `Uncaught Error: [$injector:cdep] Circular dependency found`
      $timeout(function () {        
        $http = $injector.get('$http');
        $state = $injector.get('$state');
      });  
      return {
        responseError: function (rejection) {
          if (rejection.status !== 401) {
            return rejection;
          }
  
          var deferred = $q.defer();         
          $state.go('firstNear.login');          
          deferred.reject(rejection);
          return deferred.promise;
        }
      };
    });

  });