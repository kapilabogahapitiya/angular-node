AboutYourBusinessCtrl.$inject = ['$state', 'SignUpService','localStorageService','$scope'];

export default function AboutYourBusinessCtrl($state, SignUpService,localStorageService, $scope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;
  vm.businessData = {
    businessName: '',
    legalLicenseNumber: '',
    isLicense: true,
    offerDelivery: '',
    offerPickup: '',
    offerPostage: '',
    licenseFile: '',
  };
  vm.doAboutYourBusiness = doAboutYourBusiness;
  vm.licenseNo = licenseNo;
  vm.licenseYes = licenseYes;

  $scope.licenseFileSelected = function (element) {
    var licenseFile = element.files[0];
    var fileSize = Math.round(licenseFile.size / 1000);
    if(fileSize > 12) {
        alert('Size Error! License File must be less than 16Kb!');
        console.log(licenseFile);
        return;
    } 
    else {
       var fileInfo = licenseFile.name + "  Size: " + fileSize + "KB";
       $("#spanLicenseFileInfo").html(fileInfo);
       $("#labelForLicenseFile").html("Change File");
    }     
   
 };
 $scope.element = $("#labelForLicenseFile");
 $scope.element.on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // $($scope.element).css('border','1px solid red');    
    
 });
 $scope.element.on('dragenter', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("dragenter");
    $($scope.element).css('border','1px solid red');
 });
 $scope.element.on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("dragleave");
    $($scope.element).css('border','1px solid #ccc');
 });
 $scope.element.on('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $($scope.element).css('border','1px solid #ccc');
    if (e.originalEvent.dataTransfer){
        if (e.originalEvent.dataTransfer.files.length > 0)  {
            if(e.originalEvent.dataTransfer.files.length > 1) {
                alert("Please Select Only One File!");
                return;
            }
            else {
                $scope.licenseFileSelected(e.originalEvent.dataTransfer);
            }
            
        }
    }
    return false;
});
  function doAboutYourBusiness(){  
    
    if(vm.businessData.isLicense){
      if(!_.isEmpty(vm.aboutYourBusinessFrm.$error)) {
        return;
      }
    }
    else {  
      if(!_.isEmpty(vm.aboutYourBusinessFrm.businessName.$error)) {
        return;
      }

    } 
    SignUpService.aboutYourBusiness(vm.businessData);
    $state.go('firstNearMember.addYourService');   
 
  }
  function licenseYes(){
    vm.businessData.isLicense = true;
  }
  function licenseNo(){
    vm.businessData.isLicense = false;
  }
  function restoreUI(){
    if(vm.businessData.isLicense){
      $('#btn_license_yes').attr('class','btn active');
      $('#btn_license_no').attr('class','btn');
    }
    else {
      $('#btn_license_yes').attr('class','btn');
      $('#btn_license_no').attr('class','btn active');
    }
  }
}
