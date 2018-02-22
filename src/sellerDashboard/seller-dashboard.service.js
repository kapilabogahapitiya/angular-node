SellerDashboardService.$inject = ['$q', 'RestApiService', 'FIRSTNEAR_CONSTANTS', '$window','localStorageService','RestangularService','$state'];

export default function SellerDashboardService($q, RestApiService, FIRSTNEAR_CONSTANTS, $window,localStorageService, RestangularService, $state) {
  var service = {
    doAddService: doAddService,
    getServiceList: getServiceList,
    doEditService: doEditService,
    doDeleteService: doDeleteService,
    doSaveAndPublishPromotion: doSaveAndPublishPromotion,
    getPromotionList: getPromotionList,
    doEditPromotion : doEditPromotion,
    doDeletePromotion: doDeletePromotion,
    getFoodCategoryList: getFoodCategoryList,
    createNewFoodCategory: createNewFoodCategory,
    deleteFoodCategory: deleteFoodCategory,
    editFoodCategory: editFoodCategory,
    addNewFoodService: addNewFoodService,
    getFoodServiceList: getFoodServiceList,
    getFoodListByCategory: getFoodListByCategory,
    deleteFoodService: deleteFoodService,
    editFoodService: editFoodService,
    saveBusinessDetailData: saveBusinessDetailData,
    getBusinessSetupData: getBusinessSetupData,
    saveTradingHoursData: saveTradingHoursData,
    saveBookingPolicyData: saveBookingPolicyData,
    saveBankInformationData : saveBankInformationData,
    getProfileData: getProfileData,
    saveProfileData: saveProfileData,
    changePassword: changePassword,
    getHeaderProfileData: getHeaderProfileData,
  };

  return service; 
  function doAddService(serviceData){

    serviceData.id = getLoginID();
    RestangularService.all('merchant/dashboard/service/add').post(serviceData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){
            $state.go('firstNearMember.seller-dashboard-manage-service');
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    });  
  };
 function getServiceList(){
    var data = {
        login_id: getLoginID()
    };
    return RestangularService.all('merchant/dashboard/service/list').getList(data);
 };
 function doEditService(serviceData){
    RestangularService.all('merchant/dashboard/service/edit').post(serviceData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){
            $state.go('firstNearMember.seller-dashboard-manage-service');
            // $route.reload();
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    });  
 };
 function doDeleteService(data){
     console.log(data);
     var serviceData = {ServiceID: data.serviceID};
    RestangularService.all('merchant/dashboard/service/delete').post(serviceData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){
            $window.location.reload();
            $state.go('firstNearMember.seller-dashboard-manage-service');
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    });  
 };
 function doSaveAndPublishPromotion(promotionData){
    promotionData.login_id = getLoginID();
    RestangularService.all('merchant/dashboard/promotion/add').post(promotionData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){           
            $state.go('firstNearMember.seller-dashboard-promotion-list');
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    }); 

 };

 function getPromotionList(){
    var data = {
        login_id: getLoginID()
    };
    return RestangularService.all('merchant/dashboard/promotion/list').getList(data);
 };

 function doEditPromotion(promotionData){
    promotionData.login_id = getLoginID();
    RestangularService.all('merchant/dashboard/promotion/edit').post(promotionData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){
           
            $state.go('firstNearMember.seller-dashboard-promotion-list');
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    }); 
    
 };
 function doDeletePromotion(data){
    var promotionData = { _id: data};
    RestangularService.all('merchant/dashboard/promotion/delete').post(promotionData).then(function(res){
        if(res.statusCode ==  401) {
            $state.go('firstNear.login');
        }
        if(res.data){
            $window.location.reload();
            // $state.go('firstNearMember.seller-dashboard-promo-service');
        }
        console.log(res);
      }, 
      function(res){
        console.log(res);
        alert("Server Error!");
    });  
 }

 function getFoodCategoryList(){
    var data = {
        login_id: getLoginID()
    };
    return RestangularService.all('merchant/dashboard/service/food/category/list').getList(data);
 };

 function createNewFoodCategory(category_name){
     var data = {
         login_id : getLoginID(),
         category_name: category_name
     };
     return RestangularService.all('merchant/dashboard/service/food/category/create').post(data);
 };
 function deleteFoodCategory(categoryID){
    var data = {
        login_id : getLoginID(),
        category_id: categoryID
    };
    return RestangularService.all('merchant/dashboard/service/food/category/delete').post(data);
 };
 function editFoodCategory(category_name,category_id){
    var data = {
        login_id : getLoginID(),
        category_name: category_name,
        category_id: category_id
    };
    return RestangularService.all('merchant/dashboard/service/food/category/edit').post(data);
};

function addNewFoodService(serviceData){
    serviceData.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/service/food/add').post(serviceData);
};

function getFoodServiceList(){
    var data = {
        login_id: getLoginID()
    };
    return RestangularService.all('merchant/dashboard/service/food/list').post(data);
};
function getFoodListByCategory(category_id){
    var data = {
        login_id: getLoginID(),
        category_id: category_id
    };
    return RestangularService.all('merchant/dashboard/service/food/list/category').post(data);
};

function deleteFoodService(food){
    var data = {
        login_id: getLoginID(),
        food_id: food._id,
        category_id: food.CategoryID
    }
    return RestangularService.all('merchant/dashboard/service/food/delete').post(data);

};

function editFoodService(serviceData){
    serviceData.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/service/food/edit').post(serviceData);
};

function saveBusinessDetailData(businessDetailData){
     businessDetailData.login_id = getLoginID();
     return RestangularService.all('merchant/dashboard/business/detail/save').post(businessDetailData);

};
function getBusinessSetupData(){
    var data = {
        login_id: getLoginID()
    };
    return RestangularService.all('merchant/dashboard/business/setup/data').post(data);
}
function saveTradingHoursData(data){
   data.login_id = getLoginID();
   return RestangularService.all('merchant/dashboard/business/tradinghour/save').post(data);
};
function saveBookingPolicyData(data){
    data.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/business/policy/save').post(data);
};
function saveBankInformationData(data) {
    data.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/business/bank/save').post(data);
};
function getProfileData(){
    var data = { login_id: getLoginID()};
    return RestangularService.all('merchant/dashboard/profile/data/get').post(data);
};
function saveProfileData(data){
    data.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/profile/data/save').post(data);
};
function changePassword(data){
    data.login_id = getLoginID();
    return RestangularService.all('merchant/dashboard/profile/password/change').post(data);
};
function getHeaderProfileData(){
     var data = { login_id: getLoginID()};
     return RestangularService.all('merchant/dashboard/header/profile/data').post(data);
};
function getLoginID(){
    var login_id = localStorageService.get('id');
    if(login_id) return login_id;
    else {
        $state.go('firstNear.login');
    }
}

}