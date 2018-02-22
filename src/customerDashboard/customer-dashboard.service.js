CustomerDashboardService.$inject = ['$q', 'RestApiService', 'FIRSTNEAR_CONSTANTS', '$window','localStorageService','RestangularService','$state'];

export default function CustomerDashboardService($q, RestApiService, FIRSTNEAR_CONSTANTS, $window,localStorageService, RestangularService, $state) {
  var service = {
    getProfileData: getProfileData,
    saveProfileData: saveProfileData,
    changePassword: changePassword,
    getHeaderProfileData: getHeaderProfileData,
    addNewRequest: addNewRequest,   
  };

  return service;

  function getProfileData(){
      var data = { login_id: getLoginID()};
      return RestangularService.all('customer/dashboard/profile/data/get').post(data);
  };
  function saveProfileData(data){
      data.login_id = getLoginID();
      return RestangularService.all('customer/dashboard/profile/data/save').post(data);
  };
  function changePassword(data){
      data.login_id = getLoginID();
      return RestangularService.all('customer/dashboard/profile/password/change').post(data);
  }; 
  function getLoginID(){
      var login_id = localStorageService.get('id');
      if(login_id) return login_id;
      else {
          $state.go('firstNear.login');
      }
  }
  function getHeaderProfileData(){
      return RestangularService.all('customer/dashboard/header/profile').one('data').get();
  }
  function addNewRequest(data){
      return RestangularService.all('customer/dashboard/request/add').post(data);
  }
  

 
}