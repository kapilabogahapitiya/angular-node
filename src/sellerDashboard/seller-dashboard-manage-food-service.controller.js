SellerDashboardManageFoodServiceCtrl.$inject = ['$state','localStorageService','$scope','SellerDashboardService'];

export default function SellerDashboardManageFoodServiceCtrl($state, localStorageService, $scope, SellerDashboardService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.foodData = [];
  $scope.foodCategoryData = [];
  $scope.food_category = '';
  $scope.$on('$viewContentLoaded', function(){
    SellerDashboardService.getFoodServiceList().then(function(res){
        $scope.foodData = res.data.food_list;
        for( var i = 0; i < $scope.foodData.length; i++){
          if($scope.foodData[i].small_price != ''){
           
            $scope.foodData[i].price = $scope.foodData[i].small_price;
          } else if ($scope.foodData[i].medium_price != ''){
            $scope.foodData[i].price = $scope.foodData[i].medium_price;
          }
          else {
            $scope.foodData[i].price = $scope.foodData[i].large_price;
          }
        }
       
        $scope.foodCategoryData = res.data.category_list;
        if($scope.foodCategoryData.length != 0){
          $scope.food_category = $scope.foodCategoryData[0]._id;
        }
    }, function(res){
        console.log(res);
        alert('Server Error!');

    });
  });

  $scope.getFoodList = function(){
    SellerDashboardService.getFoodListByCategory($scope.food_category).then(function(res){
      $scope.foodData = res.data.food_list;
      for( var i = 0; i < $scope.foodData.length; i++){
        if($scope.foodData[i].small_price != ''){
         
          $scope.foodData[i].price = $scope.foodData[i].small_price;
        } else if ($scope.foodData[i].medium_price != ''){
          $scope.foodData[i].price = $scope.foodData[i].medium_price;
        }
        else {
          $scope.foodData[i].price = $scope.foodData[i].large_price;
        }
      }
    }, function(res){
      console.log(res);
      alert("Server Error!");
    });
  };
  $scope.doEditService = function(data){
    $state.go('firstNearMember.seller-dashboard-edit-food-service',{data:data});
  };

  $scope.doDeleteService = function(data){
    if(confirm('Are you sure?')){
      SellerDashboardService.deleteFoodService(data).then(function(res){
        $scope.foodData = res.data.food_list;
        for( var i = 0; i < $scope.foodData.length; i++){
          if($scope.foodData[i].small_price != ''){
           
            $scope.foodData[i].price = $scope.foodData[i].small_price;
          } else if ($scope.foodData[i].medium_price != ''){
            $scope.foodData[i].price = $scope.foodData[i].medium_price;
          }
          else {
            $scope.foodData[i].price = $scope.foodData[i].large_price;
          }
        }
      }, function(res){
        console.log(res);
        alert("Server Error!");
      });
    }
    
  };
 
  
}
