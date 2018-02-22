AddYourServiceCtrl.$inject = ['$state', 'SignUpService','$scope','localStorageService'];

export default function AddYourServiceCtrl($state, SignUpService, $scope,localStorageService) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.serviceData = {
    cut_price: '',
    cut_duration: '',
    col_price: '',
    col_duration: '',
    own_service: '',
    own_price: ''

  };
  vm.doAddYourService = doAddYourService;
  $scope.$on('$viewContentLoaded',function(){
      var tempData = localStorageService.get('serviceData');
      if(tempData != null){
        vm.serviceData = tempData;
      }
      
  });
  function doAddYourService(){  
      
    if(!_.isEmpty(vm.addYourServiceFrm.$error)) {
      return;
    }  
    SignUpService.addYourService(vm.serviceData);
    $state.go('firstNearMember.businessLocation');   
 
  }
}
