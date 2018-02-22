SellerDashboardFavouriteCtrl.$inject = ['$state','localStorageService','$scope'];

export default function SellerDashboardFavouriteCtrl($state, localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.del_num = 0;



  $scope.favorLists = [
    {
      title:'Cascade Restaurant',
      content: 'Assamese, Desserts, Grills, Continental, Cafe',
      review: '12',
      num: '0'
    },
    {
      title:'Cascade Restaurant',
      content: 'Assamese, Desserts, Grills, Continental, Cafe',
      review: '15',
      num: '1'
    },
    {
      title:'Cascade Restaurant',
      content: 'Assamese, Desserts, Grills, Continental, Cafe',
      review: '45',
      num: '2'
    },    
    
  ];
  $scope.$on('$viewContentLoaded',function(){
    $scope.cur_sidebar = "firstNearMember.customer-dashboard-favourite";
  });
  $scope.delete = function(){
    for(var i = 0; i <  $scope.favorLists.length; i++){
      if($scope.favorLists[i].num == $scope.del_num){
         $scope.favorLists.splice(i,1);

      }
    }
  };
  $scope.setNum = function(num){
    $scope.del_num = num;
  };
  
}