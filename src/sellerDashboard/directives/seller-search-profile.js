export default function SellerSearchProfile() {
    return {
      template: require('./seller-search-profile.html'),
      restrict: 'E',
      // scope: {
      //   recentActivity: recentActivity
      // },
      replace: true,
      controller: SellerSearchProfileCtrl,
      controllerAs: 'vm'
    };
}  
 
  SellerSearchProfileCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService','$window','$location','SellerDashboardService'];
    
  function SellerSearchProfileCtrl($scope, FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService,$window,$location, SellerDashboardService) {
     var vm = this;
     vm.searchData = {
      service_kind : '1',
      service_location : '',
      see_more_flag: false
    };
    
    $scope.recentActivity = {
      order_num : '',
      booking_num : '',
      request_num : '',
      review_num : ''
    };   
    $scope.userData = {
      full_name: '',
      email_address: '',
      last_login: '',
      business_phone_number: '',
      avatar: '',
    };
    $scope.$on('$viewContentLoaded', function() {
      SellerDashboardService.getHeaderProfileData().then( function(res){       
        $scope.recentActivity = res.data.recentActivity;
        $scope.userData = res.data.userData;
        if($scope.userData.avatar ==''){
          $('#img_profile_avatar').attr('src',"http://localhost:3000/api/v1/merchant/dashboard/users/avatar/image?name=" + 'user.png');
        } else {
          $('#img_profile_avatar').attr('src',"http://localhost:3000/api/v1/merchant/dashboard/users/avatar/image?name=" + $scope.userData.avatar);
        }
        
      }, function(res){
          alert('Server Error!');
          console.log(res);
      });
      
    });
   
    $scope.doSearch = function() {
      // alert();
      vm.searchData.see_more_flag = false;
      localStorageService.set('searchData', vm.searchData);
      $state.go('firstNear.searchResult');
    };    
    
    
  }
  
  
  