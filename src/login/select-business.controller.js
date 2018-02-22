SelectBusinessCtrl.$inject = ['$state','SignUpService','$scope','localStorageService'];

export default function SelectBusinessCtrl($state,SignUpService,$scope, localStorageService) {
  /*jshint validthis: true */
  var vm = this;
  vm.businessTypeData = {
    type: '',
    offerType: '',    
  };
  vm.doSelectBusinessType = doSelectBusinessType;
  vm.setType = setType;
  vm.setOfferType = setOfferType;
  $scope.$on('$viewContentLoaded',function(){
    var verified = localStorageService.get('verified');
    if(verified == true){
      $state.go('firstNear.login');
    }
    console.log(verified);
    var tempData = localStorageService.get("businessTypeData");        
    if(tempData != null){
       vm.businessTypeData = tempData;
       restoreUI();
      //  console.log(tempData);
      
    } 
    else {
      vm.businessTypeData.type = "individual";
      vm.businessTypeData.offerType = "food";
    }

    
  });
  function doSelectBusinessType() {

    SignUpService.selectBusinessType(vm.businessTypeData);
    $state.go('firstNearMember.createYourAccount');
    
  }
  function setType(type){
    vm.businessTypeData.type = type;
  }
  function setOfferType(offerType){
    vm.businessTypeData.offerType = offerType;
  }
  function restoreUI(){
    var tempType = ['individual','business'];
    var tempOfferType = ['food','makeup','photography'];
    for(var i = 0; i < tempType.length; i++){
      if(vm.businessTypeData.type == tempType[i]){
        $('#type_' + tempType[i]).attr('class','btn active');
      }
      else {
        $('#type_' + tempType[i]).attr('class','btn');        
      }
    }
    for(var i = 0; i < tempOfferType.length; i++){
      if(vm.businessTypeData.offerType == tempOfferType[i]){
        $('#offerType_' + tempOfferType[i]).attr('class','btn active');
      }
      else {
        $('#offerType_' + tempOfferType[i]).attr('class','btn');
      }
    }
  }
  vm.pageLoaded = false;
}

