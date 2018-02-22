ProfileFoodCtrl.$inject = ['$state','$rootScope','localStorageService','$scope','$document'];

export default function ProfileFoodCtrl($state, $scope,$document) {
  /*jshint validthis: true */
  var vm = this;
  vm.restaurantData = {
    name :'Red Lobster',
    hour: ' 12–2pm, 5–10pm',
    address: '450 NY-211, Middletown, NY 10940,USA',
    distance: '10',
    rate: '145',
    license: '83763836383',
    deliveryInfo:{
      to: 'City Name',
      fee: '	Free Delivery',
    },
    foodList: [
      {
        country: "Chinese",
        foodList: [
          {
            "name": "Veg Burger 1", 
            "description_caption": "Veg Burger With Cheese",
            "description_full": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, been the industry s standard dummy text ever since the 15', 
            "price": 10, 
            "currency": "SAR",
            'num' : 0,
            'small': '60',
            'medium': '100',
            'large' : '200'
          }, 
          {
            "name": "Veg Burger 2", 
            "description_caption": "Veg Burger With Salami",
            "description_full": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, been the industry s standard dummy text ever since the 15',  
            "price": 10, 
            "currency": "SAR", 
            'num' : 1,
            'small': '60',
            'medium': '100',
            'large' : '200'
          }
        ],
        num: '0',       
      },
      {
        country: "India",
        foodList: [
          {
            "name": "Veg Burger 1", 
            "description_caption": "Veg Burger With Cheese",
            "description_full": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, been the industry s standard dummy text ever since the 15',  
            "price": 10, 
            "currency": "SAR", 
            'num' : 0,
            'small': '60',
            'medium': '100',
            'large' : '200'
          }, 
          {
            "name": "Veg Burger 2", 
            "description_caption": "Veg Burger With Salami",
            "description_full": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, been the industry s standard dummy text ever since the 15',  
            "price": 10, 
            "currency": "SAR", 
            'num' : 1,
            'small': '60',
            'medium': '100',
            'large' : '200'
          }
        ],
        num: '1'
      }
    ],
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    offer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    openingHour: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

  };
  vm.orderData = [];
  vm.addCart = addCart;
  vm.editCart = editCart
  vm.doCartModal = doCartModal;
  vm.doPlaceOrder = doPlaceOrder;
  $scope.orderData =[];
  $scope.oneCartData = {};
  $scope.totalPrice = 0;   
  
  
  $scope.$on('$viewContentLoaded',function(){
    $scope.tab = 1;
    $scope.sub_tab = 11;    
    $scope.restaurantData = vm.restaurantData;
    $scope.foodMenu = {};
    $scope.activeListNum = 0;
    $scope.quantity = 10;    
    // $( "#datepicker" ).datepicker();
   
    if($scope.restaurantData.foodList.length != 0 ){
      $scope.foodMenu = $scope.restaurantData.foodList[0];
      $scope.oneCartData = $scope.restaurantData.foodList[0].foodList[0];
      $scope.cartPrice = $scope.oneCartData.small;
      $('#list_' + 0).attr('class','list-group-item active text-center');
    }
    console.log("viewContentLoaded");

  });
  setTimeout(function(){
    if($scope.restaurantData.foodList.length != 0 ){      
      $('#list_' + 0).attr('class','list-group-item active text-center');
    }
    
  },300);
 
  $scope.activeList = function(num){
    initList();
    $('#list_' + num).attr('class','list-group-item active text-center');
    $scope.activeListNum = num;

    $scope.foodMenu = $scope.restaurantData.foodList[num];
    
  };
  $scope.orderNum = 0;
  function addCart(){
      var tempData = {
        name: $scope.oneCartData.name,
        price : $scope.cartPrice,
        num : $scope.orderNum,
        description: $scope.cart_description,
        res_num : $scope.activeListNum,
        food_num : $scope.cartNum,
        quantity: $scope.quantity,
      };

      $scope.orderData.push(tempData);
      $scope.orderNum = $scope.orderNum + 1;
      getTotalPrice();
      
  }
  function editCart(){

  }
  function initList(){
    for(var i = 0; i < vm.restaurantData.foodList.length; i++){
      $('#list_' + vm.restaurantData.foodList[i].num).attr('class','list-group-item text-center');
    }
  }
  $scope.clearOrder = function(){
    $scope.orderData = [];
    getTotalPrice(); 
  };
  $scope.deleteOrder = function(num){
    if(confirm("Are you sure?")){
      removeOrderData(num);
      getTotalPrice();
      
    }
  };
  $scope.editOrder = function(res_num,food_num,num){
    $scope.oneCartData = $scope.restaurantData.foodList[res_num].foodList[food_num];
    if(getOrderData(num).cart_description != undefined){
      $scope.specialShowFlag = 1;
      $scope.cart_description = getOrderData(num).cart_description;
      
    }
    $scope.quantity = getOrderData(num).quantity;
    console.log($scope.quantity);
  }
  function removeOrderData(num){
    for(var i = 0; i <  $scope.orderData.length; i++){
      if($scope.orderData[i].num == num){
         $scope.orderData.splice(i,1);

      }
    }
  }
  function getOrderData(num){
    for(var i = 0; i <  $scope.orderData.length; i++){
      if($scope.orderData[i].num == num){
          return $scope.orderData[i];

      }
    }
  }
  function doCartModal(num){
    $scope.quantity = 10;
    $scope.oneCartData = $scope.restaurantData.foodList[$scope.activeListNum].foodList[num];
    $scope.cartNum = num;
  }
  
  function getTotalPrice(){
    $scope.totalPrice = 0;
    for(var i = 0; i < $scope.orderData.length; i++){
      $scope.totalPrice = $scope.totalPrice + parseInt($scope.orderData[i].price);
    }
  }

  function doPlaceOrder(){
    
  }
  
}
