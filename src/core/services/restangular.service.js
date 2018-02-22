RestangularService.$inject = ['Restangular', 'BaseUrlService', '$window', 'FIRSTNEAR_CONSTANTS'];

export default function RestangularService(Restangular, BaseUrlService, $window, FIRSTNEAR_CONSTANTS) {

  return Restangular.withConfig(function (RestangularConfigurer) {
    // RestangularConfigurer.setBaseUrl(BaseUrlService.getBaseUrl($window.localStorage.getItem(FIRSTNEAR_CONSTANTS.localStoragePrefix + "region")));
    
    // RestangularConfigurer.setBaseUrl("http://localhost:3000/");
  }).setDefaultHttpFields({cache: false});

}
