export default function Dashboardheader() {
    return {
      template: require('./dashboard-header.html'),
      restrict: 'E',
      replace: true,
      controller: DashboardHeaderCtrl,
      controllerAs: 'vm'
    };
  }

  DashboardHeaderCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService','$window','$location'];
    
  function DashboardHeaderCtrl($scope, $location,FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService) {   
    var vm = this;    
    $scope.$on('$viewContentLoaded', function(event) {
      var ele = $('#collespe-section');
      var plus = $('#glyph');
      var btn =$('#collespe-button')
      $( "#collespe-button" ).click(function() {
        plus.toggleClass("fa-arrow-up fa-arrow-down")
        btn.toggleClass("btn-danger btn-info")
        ele.toggle('slow');
      });     
      
    });    
    
    
  }
  
  
  