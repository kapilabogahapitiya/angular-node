LoginService.$inject = ['$q', 'RestApiService', 'FIRSTNEAR_CONSTANTS', '$window','RestangularService','$state','localStorageService','$http'];

export default function LoginService($q, RestApiService, FIRSTNEAR_CONSTANTS, $window, RestangularService,$state, localStorageService, $http) {
  var service = {
    login: login,
    logout: logout,
    register: register,
    doForgotPwd: doForgotPwd,
    doResetPassword: doResetPassword,
    doVerifyAcc: doVerifyAcc,
    resendVerifyEmail: resendVerifyEmail,
    rememberEmailLogin: rememberEmailLogin,
    getLastEmailLogin: getLastEmailLogin
  };

  return service;

  function login(credentials) {
    
    RestangularService.all('login/login').post(credentials).then(function(res){
        if(res.data.username){
          localStorageService.set('username',res.data.username);
          localStorageService.set('scope', res.data.scope);
          localStorageService.set('id', res.data.id);
          localStorageService.set('token', res.data.token);
          localStorageService.set('offer_type', res.data.offer_type);
          $http.defaults.headers.common['Auth-Token'] = res.data.token;
          if(res.data.scope == 'merchant'){
            $state.go('firstNearMember.seller-dashboard-recent-order');
          }
          if(res.data.scope == "customer"){
            $state.go('firstNearMember.customer-dashboard-order-view');
          }
          

        } else{
          alert('Username or Password is not Correct Or you are not verified!');
        }
    }, 
    function(res){
      console.log(res);
      alert("Server Error!");
  });
    
  }
  

  function logout() {
    return RestApiService.logout();
  }

  function register(newUserDetails) {
    return RestApiService.register(newUserDetails);
  }

  function doForgotPwd(emailAddress) {
    var addressData = {emailAddress: emailAddress}
    RestangularService.all('login/forget/password').post(addressData).then(function(res){
       if(res.data){
         alert('Please check your email, Reset Password link was sent');
         $state.go('firstNear.login');

       } else{
         alert('Email Address or User Name is not Correct!');
       }
    }, 
    function(res){
      console.log(res);
      alert("Server Error!");
  });
}

  function doResetPassword(resetPasswordData) {
    RestangularService.all('login/reset/password').post(resetPasswordData).then(function(res){
        if(res.data){
          alert('Password Reset Success!');
          $state.go('firstNear.login');

        } else{
          alert('Token Error!');
          $state.go('firstNear.login');
        }
    }, 
    function(res){
      console.log(res);
      alert("Server Error!");
  });
  }

  function doVerifyAcc(params) {
    return RestApiService.doVerifyAcc(params);
  }

  function resendVerifyEmail() {
    return RestApiService.resendVerifyEmail();
  }

  function rememberEmailLogin(region, email) {
    if(!region) {
      return;
    }

    region = region.replace(/ /g, ".");
    region = region.replace("/", ".");

    try
    {
      $window.localStorage.setItem(SPOTZ_CONSTANTS.localStoragePrefix + region + "."+ "email", email);
    }
    catch(err)
    {
      // Unable to save to local storage, as Safari private browser blocked
      // the access to local storage.
    }
  }

  function getLastEmailLogin(region) {
    var lastEmail='';

    if(!region) {
      return;
    }

    region = region.replace(/ /g, ".");
    region = region.replace("/", ".");

    try
    {
      lastEmail = $window.localStorage.getItem(SPOTZ_CONSTANTS.localStoragePrefix + region + "."+ "email");
    }
    catch(err)
    {
      // Unable to save to local storage, as Safari private browser blocked
      // the access to local storage.
    }

    return lastEmail;
  }
}