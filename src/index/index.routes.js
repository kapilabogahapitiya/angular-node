IndexRoutes.$inject = ['$stateProvider'];

export default function IndexRoutes($stateProvider) {
  $stateProvider
    .state('firstNear.index', {
      url: '/index',
      views: {
        'nested@firstNear': {
          template: require('./index.html'),
          controllerAs: 'vm',
          controller: 'IndexCtrl'
        }
      }     

    });   
    
}
