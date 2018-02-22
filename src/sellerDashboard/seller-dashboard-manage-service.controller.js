SellerDashboardManageServiceCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService','FileUploader'];

export default function SellerDashboardManageServiceCtrl($state, localStorageService, $scope, SellerDashboardService, FileUploader) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.serviceList = [];
  $scope.$on('$viewContentLoaded',function(){

    var offer_type = localStorageService.get('offer_type');
    if(offer_type == "food"){
      $state.go('firstNearMember.seller-dashboard-manage-food-service');
    }
      SellerDashboardService.getServiceList().then(function(res){
        $scope.serviceList = res.data;
        console.log(res);
      },
      function(res){
        console.log(res);
        alert('Server Error');
      });
  });
  $scope.doEditService = function (data){
    $state.go("firstNearMember.seller-dashboard-edit-service", {data: data});
  };

  $scope.doDeleteService = function (data){
    if(confirm("Are you Sure?")){
      SellerDashboardService.doDeleteService(data);
    }
    
    // console.info(data);
  };
  var uploader = $scope.uploader = new FileUploader({
      url: 'http://localhost:3000/api/v1/merchant/dashboard/service/upload/image',
      formData: [
        { "login_id": localStorageService.get('id')},        
      ]
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
