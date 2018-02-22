CommonRoutes.$inject = ['$stateProvider'];

export default function CommonRoutes($stateProvider) {
  $stateProvider
    .state('firstNear.about', {
      url: '/about',
      views: {
        'nested@firstNear': {
          template: require('./about.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })
    .state('firstNear.contact', {
      url: '/contact',
      views: {
        'nested@firstNear': {
          template: require('./contact.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })
    .state('firstNear.faq', {
      url: '/faq',
      views: {
        'nested@firstNear': {
          template: require('./faq.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })
    .state('firstNear.howItworks', {
      url: '/how-it-works',
      views: {
        'nested@firstNear': {
          template: require('./howitworks.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })   
    .state('firstNear.pricing', {
      url: '/pricing',
      views: {
        'nested@firstNear': {
          template: require('./pricing.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })
    .state('firstNear.privacyPolicy', {
      url: '/privacy-policy',
      views: {
        'nested@firstNear': {
          template: require('./privacy-policy.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    })
    .state('firstNear.termsConditions', {
      url: '/terms-conditions',
      views: {
        'nested@firstNear': {
          template: require('./terms-conditions.html'),
          controllerAs: 'vm',
          controller: 'CommonCtrl'
        }
      }
    });
}
