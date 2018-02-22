CustomerRoutes.$inject = ['$stateProvider'];

export default function CustomerRoutes($stateProvider) {
  $stateProvider
    .state('firstNear.browseServices', {
        url: '/browseServices',
        views: {
            'nested@firstNear': {
            template: require('./browse-services.html'),
            controllerAs: 'vm',
            controller: 'BrowseServicesCtrl'
            }
        }  

    })
    .state('firstNear.profilePhotographyMakeup', {
        url: '/profilePhotographyMakeup',
        views: {
            'nested@firstNear': {
            template: require('./profile-photography-makeup.html'),
            controllerAs: 'vm',
            controller: 'ProfilePhotographyMakeupCtrl'
            }
        }  

    })
    .state('firstNear.requestQuote', {
        url: '/requestQuote',
        views: {
            'nested@firstNear': {
            template: require('./request-quote.html'),
            controllerAs: 'vm',
            controller: 'RequestQuoteCtrl'
            }
        }  

    })
    .state('firstNear.profileFood', {
        url: '/profileFood',
        views: {
            'nested@firstNear': {
            template: require('./profile-food.html'),
            controllerAs: 'vm',
            controller: 'ProfileFoodCtrl'
            }
        }  

    })
    .state('firstNear.booking', {
        url: '/booking',
        views: {
            'nested@firstNear': {
            template: require('./booking.html'),
            controllerAs: 'vm',
            controller: 'BookingCtrl'
            }
        }
    })
    .state('firstNear.checkout', {
        url: '/checkout',
        views: {
            'nested@firstNear': {
            template: require('./checkout.html'),
            controllerAs: 'vm',
            controller: 'CheckoutCtrl'
            }
        }
    })
    .state('firstNear.account-verification', {
        url: '/account-verification',
        views: {
            'nested@firstNear': {
            template: require('./account-verification.html'),
            controllerAs: 'vm',
            controller: 'AccountVerificationCtrl'
            }
        }
    });

    
}
