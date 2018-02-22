// import angular from 'angular';
import RestApiService from '../core/services/rest-api.service';
import core from '../core';
import LoginService from './login.service';
import SignUpService from './signup.service';
import routing from './login.routes';
import LoginCtrl from './login.controller';
import SignUpMainCtrl from './signup-main.controller';
import ForgotPasswordCtrl from './forgot-password.controller';
import AccountVerificationCtrl from './account-verification.controller';
import SelectBusinessCtrl from './select-business.controller';
import CreateYourAccountCtrl from './create-your-account.controller';
import VerifyPhoneNumberCtrl from './verify-phone-number.controller';
import AboutYourBusinessCtrl from './about-your-business.controller';
import AddYourServiceCtrl from './add-your-service.controller';
import BusinessLocationCtrl from './business-location.controller';
import WelcomePageCustomerCtrl from './welcome-page-customer.controller';
import ResetPasswordCtrl from './reset-password.controller';
import socialLogin from '../../node_modules/angularjs-social-login/angularjs-social-login';
// import ResetCtrl from './reset.controller';
import angularLocalStorage from 'angular-local-storage';
//import ResendVerifyAccCtrl from './resendverifyacc.controller';
// import angularGoogleMap from '../core/directives/angular-google-map';
export default angular.module('firstNear.login', [core, 'LocalStorageModule','socialLogin'])
  .service('LoginService', LoginService)
  .service('SignUpService', SignUpService)
  .config(routing)
  .config(function(socialProvider){

    socialProvider.setFbKey({appId: "142659696345357", apiVersion: "v2.1"});
 
  })
  .controller('LoginCtrl', LoginCtrl)
  .controller('SignUpMainCtrl', SignUpMainCtrl)
  .controller('AccountVerificationCtrl', AccountVerificationCtrl)
  .controller('ForgotPasswordCtrl', ForgotPasswordCtrl)
  .controller('SelectBusinessCtrl',SelectBusinessCtrl)
  .controller('CreateYourAccountCtrl',CreateYourAccountCtrl)
  .controller('VerifyPhoneNumberCtrl',VerifyPhoneNumberCtrl)
  .controller('AboutYourBusinessCtrl',AboutYourBusinessCtrl)
  .controller('AddYourServiceCtrl',AddYourServiceCtrl)
  .controller('BusinessLocationCtrl',BusinessLocationCtrl)
  .controller('WelcomePageCustomerCtrl',WelcomePageCustomerCtrl)
  .controller('ResetPasswordCtrl', ResetPasswordCtrl)
  // .controller('ResetCtrl', ResetCtrl)
  // .controller('ResendVerifyAccCtrl', ResendVerifyAccCtrl)
  .name;
