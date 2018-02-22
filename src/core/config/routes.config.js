RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/firstNear/index');

  $stateProvider
  // Base view with header and sidebar
    .state('firstNear', {
      url: '/firstNear',
      template: require('../../sb-admin/common/layout.html'), //populates un-named view in index.html,
      controller: 'LayoutCtrl',
      controllerAs: 'layout',
      ncyBreadcrumb: {
        skip: true // Never display this state in breadcrumb.
      }
    })
    .state('firstNearMember', {
      url: '/firstNearMember',
      template: require('../../sb-admin/common/layout-signup.html'),
      controller: 'LayoutCtrl',
      controllerAs: 'layout',
      ncyBreadcrumb: {
        skip: true
      }
    });
}
