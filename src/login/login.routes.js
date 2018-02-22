routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

  $stateProvider
    .state('firstNear.login', {
      url: '/login?region',
      views: {
        'nested@firstNear': {
          template: require('./login.html'),
          controllerAs: 'vm',
          controller: 'LoginCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNear.forgotpwd', {
      url: '/forgotpwd',
      views: {
        'nested@firstNear': {
          template: require('./forgot-password.html'),
          controllerAs: 'vm',
          controller: 'ForgotPasswordCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNear.signupMain', {
      url: '/signupMain',
      views: {
        'nested@firstNear': {
          template: require('./signup-main.html'),
          controllerAs: 'vm',
          controller: 'SignUpMainCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })    
    .state('firstNearMember.selectBusiness', {
      url: '/selectBusiness',
      views: {
        'nested@firstNearMember': {
          template: require('./select-business.html'),
          controllerAs: 'vm',
          controller: 'SelectBusinessCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNearMember.createYourAccount', {
      url: '/createYourAccount',
      views: {
        'nested@firstNearMember': {
          template: require('./create-your-account.html'),
          controllerAs: 'vm',
          controller: 'CreateYourAccountCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNearMember.verifyPhoneNumber', {
      url: '/verifyPhoneNumber',
      views: {
        'nested@firstNearMember': {
          template: require('./verify-phone-number.html'),
          controllerAs: 'vm',
          controller: 'VerifyPhoneNumberCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNearMember.aboutYourBusiness', {
      url: '/aboutYourBusiness',
      views: {
        'nested@firstNearMember': {
          template: require('./about-your-business.html'),
          controllerAs: 'vm',
          controller: 'AboutYourBusinessCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNearMember.addYourService', {
      url: '/addYourService',
      views: {
        'nested@firstNearMember': {
          template: require('./add-your-service.html'),
          controllerAs: 'vm',
          controller: 'AddYourServiceCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNearMember.businessLocation', {
      url: '/businessLocation',
      views: {
        'nested@firstNearMember': {
          template: require('./business-location.html'),
          controllerAs: 'vm',
          controller: 'BusinessLocationCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNear.welcomePageCustomers', {
      url: '/welcomePageCustomers',
      views: {
        'nested@firstNear': {
          template: require('./welcome-page-customer.html'),
          controllerAs: 'vm',
          controller: 'WelcomePageCustomerCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })
    .state('firstNear.reset-password', {
      url: '/reset-password',
      views: {
        'nested@firstNear': {
          template: require('./reset-password.html'),
          controllerAs: 'vm',
          controller: 'ResetPasswordCtrl'
        },
      },
      ncyBreadcrumb: {
        skip: true
      }
    })




    // .state('reset', {
    //   url: '/reset/:token?region=',
    //   controller: 'ResetCtrl',
    //   controllerAs: 'vm',
    //   template: require('./reset.jade')
    // })
    // .state('verify', {
    //   url: '/verify?email=&token=&region=',
    //   controller: 'VerifyAccCtrl',
    //   controllerAs: 'vm',
    //   template: require('./verifyacc.jade')
    // })
    // .state('spotz.resendverify', {
    //   url: '/resendverify',
    //   views: {
    //     'nested@spotz': {
    //       template: require('./resendverifyacc.jade'),
    //       controllerAs: 'vm',
    //       controller: 'ResendVerifyAccCtrl'
    //     },
    //   },
    //   ncyBreadcrumb: {
    //     skip: true
    //   }
    // });
}
