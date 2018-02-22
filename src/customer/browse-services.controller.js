BrowseServicesCtrl.$inject = ['$state','$document','$scope','$rootScope','localStorageService'];

export default function BrowseServicesCtrl($state,$document,$scope, $rootScope,localStroageService) {
  /*jshint validthis: true */
    var vm = this;
    vm.data = [];
    vm.search = search;
    vm.loadMore = loadMore;
    vm.doProfile = doProfile;
    $scope.data = [];  
    $scope.service = "";
    $scope.category = "";
    $scope.location = "";
    $scope.sort_by = "";
    $scope.categoryCaption = ['Photographers','Restaurant','Makeup Artist'];
    $scope.$on('$viewContentLoaded', function(){
            var categories = ['Photography','Food','Makeup Artist'];
            var names = [
                ['Photo Shoots Studios ',' Strike a Pose Studio','Lens-Photography'],
                ['Restaurant 1','Restaurant 2','Restaurant 3'],
                ['Makeup Artist 1','Makeup Artist 2', 'Makeup Artist 3']
            ];
            var locations = ['New York','Los angeles','Washington'];
            var photos = ['photo1.jpg','photo2.jpg','photo3.jpg'];        
            for (var i = 0; i < 12; i++){
                var singleData = {};
                singleData.category = getRandomInt(0,2);
                singleData.name = names[singleData.category][getRandomInt(0,2)];
                singleData.location = locations[getRandomInt(0,2)];
                singleData.distance = getRandomInt(0,100);
                singleData.rate = getRandomInt(0,1000);
                singleData.photo = photos[getRandomInt(0,2)];
                vm.data.push(singleData);
            }// make temp json data       
            var tempData = localStroageService.get('searchData');
            if( tempData != null){                        
                // console.log(tempData);
                $scope.service = tempData.service_kind;
                if(!tempData.see_more_flag){
                    $scope.location = tempData.service_location;                              
                }                      
            }        
            search();

            $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
            $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');
            $('#products .item').addClass('grid-group-item');});
        
            
    }); 
  
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    function search(){
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
    function loadMore(){    
        $scope.data = vm.data;
    }
    function doProfile(category){
        
        localStroageService.set('photographyProfileNumber',1);
        if(category == 0){
            $state.go('firstNear.profilePhotography');
        } else if (category == 1){
            $state.go('firstNear.profileFood');
        }
        else {
            alert("Not Implemented yet!");
        }
       
        // $state.go('firstNear.profileFood');
    }
    angular.element($document).bind("ready",function(){
        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');});
    });
  
}
