AddJwtToRequest.$inject = ['$httpProvider', 'jwtInterceptorProvider'];

export default function AddJwtToRequest($httpProvider, jwtInterceptorProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];

  // Please note we're annotating the function so that the $injector works when the file is minified
  jwtInterceptorProvider.tokenGetter = ['localStorageService', function (localStorageService) {
    return localStorageService.get('jwt');
  }];
  $httpProvider.interceptors.push('jwtInterceptor');
}
