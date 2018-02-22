WelcomeRoutes.$inject = ['$stateProvider'];

export default function WelcomeRoutes($stateProvider) {
  $stateProvider
   
    .state('firstNear.welcomePageCustomer', {
      url: '/welcomePageCustomer',
      views: {
        'nested@firstNear': {
          template: require('./welcome-page-customer.html'),
          controllerAs: 'vm',
          controller: 'WelcomeCtrl'
        }
      }
    });
}
