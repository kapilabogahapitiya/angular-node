SellerDashboardAddNewFoodServiceCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService','FileUploader'];

export default function SellerDashboardAddNewFoodServiceCtrl($state, localStorageService, $scope, SellerDashboardService, FileUploader) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.categoryData = [];
  $scope.serviceData = {
    CategoryID: '',
    item_name: '',
    item_description: '',
    small_price: '',
    medium_price: '',
    large_price: '',
    delivery_option: '',
  };   
  $scope.$on('$viewContentLoaded',function(){
    $scope.serviceData.delivery_option = 'pickup';
    SellerDashboardService.getFoodCategoryList().then(function(res){
      $scope.categoryData = res.data;     
      $scope.categoryData.push({ _id: '0', name: 'New Category'});
      $scope.serviceData.CategoryID =$scope.categoryData[0]._id;
    }, function(res){
        console.log(res);
        alert("Server Error!");
    });

  });
  $scope.setDeliveryType = function(type){
    $scope.serviceData.delivery_option = type;
  };

  $scope.doAddService = function(){
    if (!_.isEmpty($scope.addServiceForm.$error)) {
      return;
    }
    if($scope.serviceData.small_price == '' && $scope.serviceData.medium_price == '' && $scope.serviceData.large_price == ''){
      return;
    }
    if($scope.uploader.queue.length == 0 ){
      return;
    }
    if($scope.serviceData.CategoryID == '' || $scope.serviceData.CategoryID == 0){
      alert('Please select category!');
      return;
    }
    SellerDashboardService.addNewFoodService($scope.serviceData).then(function(res){
        if(res.data.food_id){
            uploader.queue[0].formData = [
              { "login_id": localStorageService.get('id')},
              {"food_id" : res.data.food_id}
            ]; 
            uploader.queue[0].upload();
        }
    }, function(res){
       console.log(res);
       alert('Server Error!');
    });

   
  };
  $scope.doCreateNewCategory = function(){
    if( $scope.category_name == '' || $scope.category_name == undefined){
      return;
    }
    else {      
      $('#addNewCategoryModal').modal('toggle');
      SellerDashboardService.createNewFoodCategory($scope.category_name).then(function(res){
        $scope.categoryData = res.data;     
        $scope.categoryData.push({ _id: '0', name: 'New Category'});
      }, function(res){
        console.log(res);
        alert('Server Error!');
      });
    }
  };

  $scope.showState = function(){
    alert($scope.serviceData.CategoryID);
  }

  $scope.doDeleteCategory = function(){
    if( confirm("Are you sure?")){
      SellerDashboardService.deleteFoodCategory($scope.serviceData.CategoryID).then(function(res){
        $scope.categoryData = res.data;     
        $scope.categoryData.push({ _id: '0', name: 'New Category'});
        $scope.serviceData.CategoryID =$scope.categoryData[0]._id;
      }, function(res){
        console.log(res);
        alert('Server Error!');
      });
    }
    
  };

  $scope.setEditCategoryName = function(){
    $scope.edit_category_name = getCategoryNameByID();
  };

  $scope.doEditCategory = function(){
    if( $scope.edit_category_name == '' || $scope.edit_category_name == undefined){
      return;
    }
    else {      
      $('#editCategoryModal').modal('toggle');
      SellerDashboardService.editFoodCategory($scope.edit_category_name, $scope.serviceData.CategoryID).then(function(res){
        $scope.categoryData = res.data;     
        $scope.categoryData.push({ _id: '0', name: 'New Category'});
      }, function(res){
        console.log(res);
        alert('Server Error!');
      });
    }
  };

  function getCategoryNameByID(){
    for(var i = 0; i < $scope.categoryData.length; i++){
        if($scope.categoryData[i]._id == $scope.serviceData.CategoryID) return $scope.categoryData[i].name;
    }
    return '';
  }
  var uploader = $scope.uploader = new FileUploader({
      url: 'http://localhost:3000/api/v1/merchant/dashboard/service/food/upload/image',      
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
      $state.go('firstNearMember.seller-dashboard-manage-food-service');
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
