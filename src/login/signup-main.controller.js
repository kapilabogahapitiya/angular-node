
SignUpMainCtrl.$inject = ['$state', 'SignUpService','$scope','$rootScope'];

export default function SignUpMainCtrl($state, SignUpService,$scope,$rootScope) {
  /*jshint validthis: true */
  var vm = this;
  vm.pageLoaded = false;  
  $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
     console.log("SignUp With Facebook called!");
     console.log(userDetails);
     SignUpService.signUpWithFacebook(userDetails);
     $state.go("firstNear.welcomePageCustomers");
  });
  vm.doSignUp = doSignUp;

  function doSignUp() {
    
    
  }
}

