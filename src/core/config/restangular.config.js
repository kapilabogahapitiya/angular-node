GlobalRestangularConfig.$inject = ['RestangularProvider'];

export default function GlobalRestangularConfig(RestangularProvider) {
  RestangularProvider.setFullResponse(true); // Need this so we get response headers
  RestangularProvider.setResponseExtractor(function(response, method, route) {
    var newResponse = response;
    if ((_.includes(route, '/config/dashboard') || _.includes(route, '/config/kiosk')) && method === 'get' && response) {
      newResponse.original = angular.copy(response);
      return newResponse;
    }
    return newResponse;
  });
  RestangularProvider.setBaseUrl('http://localhost:3000/api/v1/');

  RestangularProvider.setDefaultRequestParams({
    apiKey: '4f847ad3e4b08a2eed5f3b54'
  });
  // RestangularProvider.setRestangularFields({
  //   id: '_id.$oid'
  // });

  // // Set up a requestinterceptor that empties the 
  // // object's _id value when it's updated (why??)
  // RestangularProvider.setRequestInterceptor(function (elem, operation, what) {
  //   if (operation === 'put') {
  //     elem._id = undefined;
  //   }
  //   return elem;
  // });
}
