SellerDashboardBusinessSetupCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService','$stateParams','FileUploader','$http'];

export default function SellerDashboardBusinessSetupCtrl($state, localStorageService, $scope, SellerDashboardService, $stateParams, FileUploader, $http) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.businessDetailData = {
    location_type: 'business',
    business_name: '',
    phone_number: '',
    about_business: '',
    legal_license_no: '',    
    delivery_flag: false,
    pickup_flag : false,
    postage_flag:  false,
    instagram_account: '',
    license_copy: '',
  };
  $scope.bookingPolicyData = {
    booking_policy: ''
  };
  $scope.bankInformationData = {
    bank_name: '',
    name_of_account_holder: '',
    bank_account_no: '',    
  };
  $scope.tradingHoursData = {
    mon_from: '',
    mon_to: '',
    tue_from: '',
    tue_to: '',
    wed_from: '',
    wed_to: '',
    thu_from: '',
    thu_to: '',
    fri_from: '',
    fri_to: '',
    sat_from: '',
    sat_to: '',
    sun_from: '',
    sun_to: ''  
  };
  $scope.$on('$viewContentLoaded',function(){
    SellerDashboardService.getBusinessSetupData().then(function(res){
      if(Object.keys(res.data.businessDetailData).length > 0){
        Object.keys(res.data.businessDetailData).forEach(function(key) {
          if (key in $scope.businessDetailData) { // or obj1.hasOwnProperty(key)
            $scope.businessDetailData[key] = res.data.businessDetailData[key];
          }
        });
        setLocationActive($scope.businessDetailData.location_type);
        if($scope.businessDetailData.license_copy != ''){
          var url = 'http://localhost:3000/api/v1/merchant/dashboard/business/detail/license?name=' + $scope.businessDetailData.license_copy;
          $http.get(url,{responseType: "blob"}).
          success(function(data, status, headers, config) {
            var mimetype = data.type;
            var file = new File([data], $scope.businessDetailData.license_copy,{type:mimetype});
            var dummy = new FileUploader.FileItem(uploader, {});
            dummy._file = file;
            dummy.progress = 100;
            dummy.isUploaded = true;
            dummy.isSuccess = true;
            uploader.queue.push(dummy);
          }).
          error(function(data, status, headers, config) {
                alert("Server Error!");
          });
        }
      }
      if(Object.keys(res.data.bookingPolicyData).length > 0){
        Object.keys(res.data.bookingPolicyData).forEach( function(key){
          if(key in $scope.bookingPolicyData){
            $scope.bookingPolicyData[key] = res.data.bookingPolicyData[key];
          }
        });
      }
      if(Object.keys(res.data.tradingHoursData).length > 0){
        Object.keys(res.data.tradingHoursData).forEach(function(key){
          if(key in $scope.tradingHoursData){
            $scope.tradingHoursData[key] = res.data.tradingHoursData[key];
          }
        });
      }
      if(Object.keys(res.data.bankInformationData).length > 0){
        Object.keys(res.data.bankInformationData).forEach(function(key){
          if(key in $scope.bankInformationData){
            $scope.bankInformationData[key] = res.data.bankInformationData[key];
          }
        });
      }
       
    }, function(res){

    });
    // $scope.cur_sidebar = "firstNearMember.customer-dashboard-request-page";
    if($stateParams.data == 'businessInfo'){      
      $('#firstTab').trigger('click');      
    } 
    else if($stateParams.data == null){

      $('#firstTab').trigger('click');
    } 
    else {
     
      $('#secondTab').trigger('click');
    }

  });
 $scope.doSaveTradingHoursData = function(){
   SellerDashboardService.saveTradingHoursData($scope.tradingHoursData).then(function(res){
      alert("Saved Success!");
      $('#trading-hours-modal').modal('toggle');
   }, function(res){
    alert("Server Error!");
    console.log(res);
   });
 };
 $scope.doSaveBookingPolicyData = function (){
  if (!_.isEmpty($scope.policyForm.$error)) {
    return;
  }
   SellerDashboardService.saveBookingPolicyData($scope.bookingPolicyData).then(function(res){
      alert("Saved Success!");
      $('#cancellation-policy-modal').modal('toggle');
   }, function(res){
      alert("Server Error!");
      console.log(res);
   });
 };
 $scope.doSaveBankInformationData = function(){
  if (!_.isEmpty($scope.bankForm.$error)) {
    return;
  }
    SellerDashboardService.saveBankInformationData($scope.bankInformationData).then(function(res){
      alert('Saved Success!');
      $('#bank-information-modal').modal('toggle');
    }, function(res){
      alert("Server Error!");
      console.log(res);
    });
 };
  function setLocationActive(str){
    if(str == "business"){
      $('#opt_business').attr('class','btn active col-md-3 col-sm-3 col-xs-6');
      $('#opt_customer').attr('class', 'btn col-md-3 col-sm-3 col-xs-6');
      $('#opt_both').attr('class', 'btn col-md-3 col-sm-3 col-xs-6');
    } else if (str == 'customer'){

      $('#opt_business').attr('class','btn col-md-3 col-sm-3 col-xs-6');
      $('#opt_customer').attr('class', 'btn active col-md-3 col-sm-3 col-xs-6');
      $('#opt_both').attr('class', 'btn col-md-3 col-sm-3 col-xs-6');
    } else {
      $('#opt_business').attr('class','btn col-md-3 col-sm-3 col-xs-6');
      $('#opt_customer').attr('class', 'btn col-md-3 col-sm-3 col-xs-6');
      $('#opt_both').attr('class', 'btn active col-md-3 col-sm-3 col-xs-6');
    }
    
  };
  $scope.setLocationType = function(type){    
    $scope.businessDetailData.location_type = type;
  };
  $scope.doSave = function(){
    if(!_.isEmpty($scope.businessDetailForm.$error)) {
      return;
    }
    SellerDashboardService.saveBusinessDetailData($scope.businessDetailData).then(function(res){
        if(res.data.businessDetailsID){
          if(uploader.queue.length != 0 && uploader.queue[0].isUploaded == false){
            uploader.queue[0].formData = [
              { "login_id": localStorageService.get('id')},
              {"businessDetailsID" : res.data.businessDetailsID}
            ]; 
            uploader.queue[0].upload();
          } else {
            alert('Detail Data of business is saved!');
            $('#secondTab').trigger('click');
          }
          
          
        }
    }, function(res){
       alert('Server Error!');
       console.log(res);
    });
    
  };

  var uploader = $scope.uploader = new FileUploader({
      url: 'http://localhost:3000/api/v1/merchant/dashboard/business/detail/upload/license',      
  });

  // FILTERS

  uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
          return '|pdf|jpg|png|jpeg|bmp|'.indexOf(type) !== -1;
      }
  });

  // CALLBACKS

  uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
  };
  uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
  };
  uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
  };
  uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
  };
  uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
  };
  uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
  };
  uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
      alert('Detail Data of business is saved!');
      $('#secondTab').trigger('click');
  };
  uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
  };
  uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
  };
  uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
      
  };
  uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
  };

    
  
}
