WelcomePageCustomerCtrl.$inject = ['$state','$scope','$location','SignUpService'];

export default function WelcomePageCustomerCtrl($state,$scope,$location,SignUpService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  $scope.$on('$viewContentLoaded',function(){        
    var _token = $location.search()._token;
    var type = $location.search().type;
    if(_token != undefined){
      SignUpService.verifyEmail(_token,type);
    } 
    
  });
}
