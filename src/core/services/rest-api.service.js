RestApiService.$inject = ['$q', 'RestangularService', 'localStorageService'];

export default function RestApiService($q, RestangularService, localStorageService) {
  var service = {
    login: login,
    logout: logout,
    register: register,
    doForgotPwd: doForgotPwd,
    selectBusinessType: selectBusinessType,
    createAccount: createAccount,
    verifyPhoneNumber: verifyPhoneNumber,
    aboutYourBusiness: aboutYourBusiness,
    addYourService: addYourService,
    businessLocation: businessLocation,
    signUpWithFacebook: signUpWithFacebook,
    // doResetPwd: doResetPwd,
    // doVerifyAcc: doVerifyAcc,
    // resendVerifyEmail: resendVerifyEmail
  };

  return service;

  // function login(credentials, authCode) {
  //   // var remember2FATokenKey = BaseUrlService.getRemember2FATokenKey();
  //   // var remember2FAToken = localStorageService.cookie.get(remember2FATokenKey);
  //   //
  //   // if(authCode)
  //   // {
  //   //   return RestangularService.all('auth').post(credentials, {}, {'x-localz-2fa-token': authCode});
  //   // }
  //   // else if(remember2FAToken)
  //   // {
  //   //   return RestangularService.all('auth').post(credentials, {}, {'x-localz-remember-2fa-token': remember2FAToken});
  //   // }
  //   // else
  //   // {
  //   //   return RestangularService.all('auth').post(credentials);
  //   // }
  // }
  function login(credentials, authCode){
    
    return true;
 };
  function createAccount(accountData){

  }
  function verifyPhoneNumber(authCode){

  }
  function selectBusinessType(businessTypeData){

  }
  function aboutYourBusiness(businessData){

  }
  function addYourService(serviceData){

  }
  function businessLocation(locationData){

  }
  function signUpWithFacebook(userDetails){

  }
  function logout() {
    // return RestangularService.all('auth').remove();
  }

  function register(newUserDetails) {
    // return RestangularService.all('account').post(newUserDetails);
  }

  function doForgotPwd(userDetails) {
    // return RestangularService.all('forgotpassword').post(userDetails);
  }
}
