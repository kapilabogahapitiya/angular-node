CustomerDashboardEditProfileCtrl.$inject = ['$state','localStorageService','$scope','CustomerDashboardService','FileUploader'];

export default function CustomerDashboardEditProfileCtrl($state, localStorageService, $scope, CustomerDashboardService, FileUploader) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.locationData = '';  
  $scope.profileData = {
    full_name: '',
    business_phone_number: '',
    email_address: '',
    avatar: '',
    LanguageID: '',    
    location_name: '',
    formatted_address: '',
    google_lat: '',
    google_lng: '',
  };
  $scope.passwordData = {
    old_password: '',
    new_password: '',
  };
  $scope.languageData = [];  
  $scope.$on('$viewContentLoaded',function(){
    $scope.latitude = '51.507351';
    $scope.longitude = '-0.127758';
    CustomerDashboardService.getProfileData().then(function(res){
       $scope.profileData = res.data.profileData;
       $scope.languageData = res.data.languageData;
       if($scope.profileData.LanguageID == ''){
         $scope.profileData.LanguageID = $scope.languageData[0]._id;
       }
       if($scope.profileData.google_lat != ''){
         $scope.latitude = $scope.profileData.google_lat;
         $scope.longitude = $scope.profileData.google_lng;
         $('#googleMapAddress').val($scope.profileData.formatted_address);
         $('#googleCity').val($scope.profileData.location_name);
         $('#googleLatitude').val($scope.latitude);
         $('#googleLongitude').val($scope.longitude);
       }
      if($scope.profileData.avatar == ''){
        $('#img_avatar').attr('src',"http://localhost:3000/api/v1/merchant/dashboard/users/avatar/image?name=" + 'user.png');
      } else {
        $('#img_avatar').attr('src', "http://localhost:3000/api/v1/merchant/dashboard/users/avatar/image?name=" + $scope.profileData.avatar);
      }
      
    }, function(res){
      
      alert('Server Error!');
      console.log(res);

    });
  });  
  $scope.doSaveProfileData = function (){    
    if(!_.isEmpty($scope.myForm.$error)) {
      return;
    }
    $scope.profileData.location_name = $('#googleCity').val();
    $scope.profileData.formatted_address = $('#googleMapAddress').val();
    $scope.profileData.google_lat = $('#googleLatitude').val();
    $scope.profileData.google_lng = $('#googleLongitude').val();
    CustomerDashboardService.saveProfileData($scope.profileData).then(function(res){
      if(uploader.queue.length > 0){
        uploader.queue[0].formData = [
          { "login_id": localStorageService.get('id')},         
        ]; 
        uploader.queue[0].upload();
      }
      alert("Save Success!");
    }, function(res){
      alert("Server Error!");
      console.log(res);
    });
    
  }
  $scope.doChangePassword = function(){
    if(!_.isEmpty($scope.pwdForm.$error)) {
      return;
    }
    if($scope.passwordData.old_password == $scope.passwordData.new_password || $scope.passwordData.new_password != $scope.password_re){
      return;
    }
    CustomerDashboardService.changePassword($scope.passwordData).then(function(res){
        alert(res.data.message);
    }, function(res){
       alert('Server Error!');
       console.log(res);
    });
  }
  $scope.step = [];
  $scope.imageUpload = function(event){     
      var files = event.target.files; //FileList object    
      var file = files[0];
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded; 
      reader.readAsDataURL(file);   
  }
  $scope.imageIsLoaded = function(e){
    $scope.$apply(function() {
        $scope.step = e.target.result;
    });
  }
  var uploader = $scope.uploader = new FileUploader({
      url: 'http://localhost:3000/api/v1/customer/dashboard/users/avatar/image/upload',      
  });

  // FILTERS

  uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
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