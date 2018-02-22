/** Third party libraries **/

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularDatatables from '../../node_modules/angular-datatables/dist/angular-datatables';
import angularDatatablesBootstrap from '../../node_modules/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap';
// import socialLogin from '../../node_modules/angularjs-social-login/angularjs-social-login.js';
import lodash from 'lodash';
import restangular from 'restangular';
import angularJwt from 'angular-jwt';
import angularLocalStorage from 'angular-local-storage';
import ngUiNotification from 'ng-ui-notification/dist/angular-ui-notification.min';
import ocLazyLoad from 'oclazyload';
import angularSanitize from 'angular-sanitize';
// import angularGoogleMaps from 'angular-google-maps';
// import rzSlider from '../../node_modules/angularjs-rzslider/dist/rzslider.min';
// import angularBreadCrumb from '../../node_modules/angular-breadcrumb/dist/angular-breadcrumb';
// import ngAutoComplete from '../../node_modules/ng-autocomplete/src/ngAutocomplete';
import angularCache from 'angular-cache/dist/angular-cache.min';
// import bootstrapSwitch from '../../node_modules/bootstrap-switch/dist/js/bootstrap-switch.min';
// import angularBootstrapSwitch from '../../node_modules/angular-bootstrap-switch/dist/angular-bootstrap-switch.min';
// import moment from '../../node_modules/moment/min/moment.min';
// import d3js from '../../node_modules/d3/d3.min';
// import d3pie from '../../node_modules/d3pie/d3pie/d3pie.min';
// import dateTimeMoment from './datetime-moment';
// import angularMultiselect from '../../node_modules/isteven-angular-multiselect/isteven-multi-select.js';
// import angularTouch from '../../node_modules/angular-touch/angular-touch.js';
// import dateTimePicker from '../../node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.js';
// import nvd3 from '../../node_modules/nvd3/build/nv.d3.min';
// import dateRangePicker from '../../node_modules/daterangepicker/daterangepicker.js';
// import angularDateRangePicker from '../../node_modules/angular-daterangepicker/js/angular-daterangepicker.js';
// import angularNvd3 from '../../node_modules/angular-nvd3/dist/angular-nvd3.min';
// import ngCsv from '../../node_modules/ng-csv/build/ng-csv.min';
// import angularUiTinyMce from '../../node_modules/angular-ui-tinymce/src/tinymce';
// import tinyMceTheme from 'tinymce/themes/modern/theme.js'
// import highlightJs from '../../node_modules/highlight.js/lib/highlight';
// import angularHighlightJs from '../../node_modules/angular-highlightjs/angular-highlightjs';
// import ngAutoFocus from '../../node_modules/ng-autofocus/autofocus.min';
// import angularPusher from '../../node_modules/pusher-angular/lib/pusher-angular.min';
// import angularSlider from '../../node_modules/angularjs-slider/dist/rzslider.min';
// import angularTooltips from '../../node_modules/angular-tooltips/dist/angular-tooltips.min';

/** Core config **/
import coreRoutes from './config/routes.config';
import jwtConfig from './config/jwt.config';
import localStorageConfig from './config/local-storage.config';
import restangularConfig from './config/restangular.config';
import restangularConfigRun from './config/restangular-run.config';
// import loadingBarConfig from './config/loading-bar.config';
import HttpCacheConfigRun from './config/http-cache-run.config';
import RedirectUrlConfigRun from './config/redirect-url-run.config';

/** Core services **/
import RestangularService from './services/restangular.service';
import RestApiService from './services/rest-api.service';
import JwtService from './services/jwt.service';
// import DataMapperService from './services/data-mapper.service';
// import DateService from './services/date.service';
import UrlParserService from './services/url-parser.service';
// import HttpCacheService from './services/http-cache.service';
import BaseUrlService from './services/base-url.service';
// import ImageService from './services/image.service';

/** Core filters **/
// import StringTrimFilter from './filters/string-trim.filter';
// import DefaultEmpty from './filters/default-empty.filter';
// import CamelCaseToWords from './filters/camel-case-to-words.filter';

/** Core directives **/
import NumberOnlyDirective from './directives/number-only.directive';
import sbAdminDirectives from '../sb-admin';
// import NivoSliderDirective from './directives/nivo-slider.directive';
// import SpIntegerDirective from './directives/sp-integer.directive';
// import layoutDirectives from '../layout/directives';
// import TooltipsDirective from './directives/tooltips.directive';
// import ReadHtmlDirective from './directives/read-html.directive';

/** TinyMCE related **/
// import 'tinymce/plugins/link/plugin';
// import 'tinymce/plugins/autolink/plugin';
// _.extend(tinymce, tinyMce.tinymce); // hacky fix for TinyMCE

export default angular.module('firstNear.core', [
  uiRouter,
  // 'ngTouch',
  uiBootstrap,
  // socialLogin,
    // angularLoadingBar,
    // 'datatables',
    // 'datatables.bootstrap',
  'restangular',
  angularJwt,
  'LocalStorageModule',
  'ui-notification',
    // 'ui.bootstrap.showErrors',
    sbAdminDirectives,
    // 'rzModule',
    // 'uiGmapgoogle-maps',
    // 'ncy-angular-breadcrumb',
    // layoutDirectives,
  // ocLazyLoad,
    // 'ngAutocomplete',
  angularCache,
    // 'angular-clipboard',
    // 'frapontillo.bootstrap-switch',
  'ngSanitize',
    // 'ng.jsoneditor',
    // 'isteven-multi-select',
    // 'ui.bootstrap.datetimepicker',
    // 'daterangepicker',
    // 'nvd3',
    // 'ngCsv',
    // 'mentio',
    // 'ui.tinymce',
    // 'minicolors',
    // 'hljs',
    // 'autofocus',
    // 'pusher-angular',
    // 'dndLists',
    // '720kb.tooltips'
])
  .config(coreRoutes)
  .config(jwtConfig)
  .config(localStorageConfig)
  .config(restangularConfig)
  .run(HttpCacheConfigRun)
  .run(restangularConfigRun)
  // .run(RedirectUrlConfigRun)
  .factory('RestangularService', RestangularService)
  .factory('RestApiService', RestApiService)
  .factory('JwtService', JwtService)
  // .factory('DataMapperService', DataMapperService)
  // .factory('DateService', DateService)
  .factory('UrlParserService', UrlParserService)
  // .factory('HttpCacheService', HttpCacheService)
  // .factory('ImageService', ImageService)
  // .filter('defaultEmpty', DefaultEmpty)
  // .filter('sptrim', StringTrimFilter)
  // .filter('spCamelCaseToWords', CamelCaseToWords)
  .directive('numberOnly', NumberOnlyDirective)
  // .directive('nivoSlider', NivoSliderDirective)
  // .directive('spInteger', SpIntegerDirective)
  // .directive('tooltips', TooltipsDirective)
  // .directive('readHtml', ReadHtmlDirective)
  .factory('BaseUrlService', BaseUrlService) 
  // .factory('DropdownGroupService', DropdownGroupService)
  .name;
