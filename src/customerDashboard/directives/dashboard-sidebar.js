export default function Dashboardsidebar() {
    return {
      template: require('./dashboard-sidebar.html'),
      restrict: 'E',
      replace: true,
      controller: DashboardSidebarCtrl,
      controllerAs: 'vm'
    };
  }  
  DashboardSidebarCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService','$window','$location'];  
 
  function DashboardSidebarCtrl($scope, $location,FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService) {
 
    var vm = this;    
    
    $scope.$on('$viewContentLoaded', function(event) {     
      
    });    
    
    
  }
  
  
  