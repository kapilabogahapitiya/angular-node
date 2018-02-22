SignUpService.$inject = ['$q', 'RestApiService', 'FIRSTNEAR_CONSTANTS', '$window','localStorageService','RestangularService','$state'];

export default function SignUpService($q, RestApiService, FIRSTNEAR_CONSTANTS, $window,localStorageService, RestangularService, $state) {
  var service = {
    selectBusinessType: selectBusinessType,
    createAccount: createAccount,
    verifyPhoneNumber: verifyPhoneNumber,
    aboutYourBusiness: aboutYourBusiness,
    addYourService: addYourService,
    businessLocation: businessLocation,
    signUpWithFacebook: signUpWithFacebook,
    sendAuthCode: sendAuthCode,
    verifyEmail: verifyEmail    
  };

  return service;

  function selectBusinessType(businessTypeData) {
    localStorageService.set("businessTypeData", businessTypeData);
    // return RestApiService.selectBusinessType(businessTypeData);
  }
  function createAccount(accountData){     
      localStorageService.set("accountData",accountData);
      accountData.businessTypeData = localStorageService.get("businessTypeData");    
      RestangularService.all('signup/merchant/personal').post(accountData).then(function(res){
          if(res.data.verified == true){
              alert("You are already Registered!");
              $state.go('firstNear.login');
          }
          else if (res.data.username_exist){
            alert("User Name is already exist!");
          }          
          else if(res.data._id != undefined ){
            localStorageService.set('_id',res.data._id);
            $state.go('firstNearMember.verifyPhoneNumber');  
          }
        }, 
        function(res){
          console.log(res);
          alert("Server Error!");
      });
      
     
      
  }
  function verifyPhoneNumber(authCode){
    var id = localStorageService.get('_id');
    var authCodeData = {
      authCode: authCode,
      _id: id,
    };
    RestangularService.all('signup/merchant/verify/phone').post(authCodeData).then(function(res){
      if(res.data == true){
        $state.go('firstNear.welcomePageCustomers');
        localStorageService.set('verified',true);   
      }
      else {
        alert("AuthCode is not Correct");
      }
    }, 
    function(res){
      console.log(res);
      alert("Server Error!");
    });   
  }
  function sendAuthCode(){
    var id = localStorageService.get('_id');
    var idData = { _id: id};
    RestangularService.all('signup/merchant/send/authcode').post(idData).then(function(res){
      if(res.data.flag == true){
        alert("Authcode is sent!");   
      }
      else {
        alert("Please Recheck Phone Number!");
      }
    }, 
    function(res){
      console.log(res);
      alert("Server Error!");
    });
  }

  function verifyEmail(_token,type){
      var tokenData = {_token: _token,type: type};
      RestangularService.all('signup/merchant/verify/email').post(tokenData).then(function(res){
        alert(res.data.message);
        $state.go('firstNear.index');
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
      });
  

  }
  function aboutYourBusiness(businessData){
    localStorageService.set('businessData',businessData);
    return RestApiService.aboutYourBusiness(businessData);
  }
  function addYourService(serviceData){
    localStorageService.set('serviceData',serviceData);
    return RestApiService.addYourService(serviceData);
  }
  function businessLocation(locationData){
    return RestApiService.businessLocation(locationData);
  }
  function signUpWithFacebook(userDetails){
    return RestApiService.signUpWithFacebook(userDetails);
  }

 
}