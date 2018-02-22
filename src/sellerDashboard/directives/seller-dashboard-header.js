export default function SellerDashboardHeader() {
  return {
    template: require('./seller-dashboard-header.html'),
    restrict: 'E',
    replace: true,
    controller: SellerDashboardHeaderCtrl,
    controllerAs: 'vm'
  };
}


SellerDashboardHeaderCtrl.$inject = ['$scope', 'FIRSTNEAR_CONSTANTS', 'localStorageService', '$state', '$stateParams', '$rootScope', 'BaseUrlService', '$window', '$location'];

function SellerDashboardHeaderCtrl($scope, $location, FIRSTNEAR_CONSTANTS, localStorageService, $state, $stateParams, $rootScope, BaseUrlService) {

  var vm = this;
  $scope.$on('$viewContentLoaded', function (event) {
    var ele = $('#collespe-section');
    var plus = $('#glyph');
    var btn = $('#collespe-button')
    $("#collespe-button").click(function () {
      plus.toggleClass("fa-arrow-up fa-arrow-down")
      btn.toggleClass("btn-danger btn-info")
      ele.toggle('slow');
    });
    $('.tree-toggle').click(function () {
      $(this).parent().children('ul.tree').toggle(200);
    });
    $(function () {
      $('.tree-toggle').parent().children('ul.tree').toggle(200);
    })

  });


}


