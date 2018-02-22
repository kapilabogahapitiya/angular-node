import angular from 'angular';
import header from './header/header';
// import HeaderCtrl from './header/header';
import footer from './footer/footer';
// import headerNotification from './header/header-notification/header-notification';
import LayoutCtrl from './layout.controller';
import pascalprecht from '../../../node_modules/angular-translate/dist/angular-translate';
import useStaticFilesLoader from '../../../node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files';
export default angular.module('spotzApp.sbAdmin.common', [])
  .directive('header', header)
  .directive('footer', footer) 
  // .directive('headerNotification', headerNotification)
  .controller('LayoutCtrl', LayoutCtrl)
  
  // .controller('HeaderCtrl', HeaderCtrl)  
  .name;
