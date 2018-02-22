SellerDashboardRecentJobsCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardRecentJobsCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.data = [];

  
  
  $scope.data = [];  
  $scope.service = "";
  $scope.category = "";
  $scope.location = "";
  $scope.sort_by = "";
  $scope.categoryCaption = ['Photographers','Restaurant','Makeup Artist'];
  $scope.$on('$viewContentLoaded', function(){
          var categories = ['Photography','Food','Makeup Artist'];
          var state = ['Offer In Progress', 'Completed','Hired'];          
          var title = [
              ['Photography for weeding needed. ',' Photography for weeding needed.','Photography for weeding needed.'],
              ['Restaurant for weeding needed.','Restaurant for weeding needed.','Restaurant for weeding needed.'],
              ['Makeup Artist for weeding needed.','Makeup Artist for weeding needed.', 'Makeup Artist for weeding needed.']
          ];
          var content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation oluptatem sequi nesciunsdfsdfsdf ";
          $scope.locations = ['New York','Los angeles','Washington'];
          var photos = ['photo1.jpg','photo2.jpg','photo3.jpg'];        
          for (var i = 0; i < 12; i++){
              var singleData = {};
              singleData.category = getRandomInt(0,2);
              singleData.title = title[singleData.category][getRandomInt(0,2)];
              singleData.location = $scope.locations[getRandomInt(0,2)];
              singleData.distance = getRandomInt(0,100);
              singleData.bids = getRandomInt(0,1000);
              singleData.content = content;
              singleData.name = "Sam Al";
              singleData.state = state[getRandomInt(0,2)];
              singleData.rate = getRandomInt(0,100);
              if(singleData.state != 'Offer In Progress') {
                singleData.availableState = "Unavailable";
              } else singleData.availableState = "Available";
              singleData.date = '12/12/2017';                          
              vm.data.push(singleData);
          }// make temp json data       
         $scope.service = 1;
          $scope.search();
          $('.dropdown-menu').find('input').click(function(e) {
            e.stopPropagation();
          });
          
  }); 

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  $scope.setLocation = function(str){
    $scope.location = str;
  };
  $scope.search = function(){    
      var tempData = [];
      for(var i = 0; i < vm.data.length; i++){
          var locationFlag = $scope.location == '' || $scope.location == vm.data[i].location;
          var serviceFlag = $scope.service == '' ||  ($scope.service - 1) == vm.data[i].category;       
          if( locationFlag && serviceFlag){
              tempData.push(vm.data[i]);            
          }
      
      }
      if($scope.sort_by == 1){
          tempData.sort(function (a, b) {
              return a.distance - b.distance;
          });
      }
      if($scope.sort_by == 2){
          tempData.sort(function (a, b) {
              return b.rate - a.rate;
          });
      }
      
      $scope.data = tempData;
      
      
  }
  $scope.loadMore = function(){    
      $scope.data = vm.data;
  }
 
  
  
}
