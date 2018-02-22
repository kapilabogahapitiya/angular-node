IndexCtrl.$inject = ['$state','$document','$scope','$rootScope','localStorageService'];

export default function IndexCtrl($state,$document,$scope, $rootScope,localStorageSevice) {
  /*jshint validthis: true */
  var vm = this;
  vm.searchData = {
    service_kind : '1',
    service_location : '',
    see_more_flag: false
  }; 
  vm.displayRecommendedForYou = displayRecommendedForYou;
  vm.displayRestaurantService = displayRestaurantService;

  $scope.$on('$viewContentLoaded', function(){
    //Here your view content is fully loaded !!
    
    $('.rc-carousel').each(function () {
    
            // Declared all carousel variable
            var carousel = $(this),
                loop = carousel.data('loop'),
                items = carousel.data('items'),
                margin = carousel.data('margin'),
                stagePadding = carousel.data('stage-padding'),
                autoplay = carousel.data('autoplay'),
                autoplayTimeout = carousel.data('autoplay-timeout'),
                smartSpeed = carousel.data('smart-speed'),
                dots = carousel.data('dots'),
                nav = carousel.data('nav'),
                navSpeed = carousel.data('nav-speed'),
                rXsmall = carousel.data('r-x-small'),
                rXsmallNav = carousel.data('r-x-small-nav'),
                rXsmallDots = carousel.data('r-x-small-dots'),
                rXmedium = carousel.data('r-x-medium'),
                rXmediumNav = carousel.data('r-x-medium-nav'),
                rXmediumDots = carousel.data('r-x-medium-dots'),
                rSmall = carousel.data('r-small'),
                rSmallNav = carousel.data('r-small-nav'),
                rSmallDots = carousel.data('r-small-dots'),
                rMedium = carousel.data('r-medium'),
                rMediumNav = carousel.data('r-medium-nav'),
                rMediumDots = carousel.data('r-medium-dots');
    
                // Call carousel main function to load carousel layout
            carousel.owlCarousel({
                loop: (loop ? true : false),
                items: (items ? items : 4),
                lazyLoad: true,
                margin: (margin ? margin : 0),
                autoplay: (autoplay ? true : false),
                autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
                smartSpeed: (smartSpeed ? smartSpeed : 250),
                dots: (dots ? true : false),
                nav: (nav ? true : false),
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                navSpeed: (navSpeed ? true : false),
                responsiveClass: true,
                responsive: {
                    0: {
                        items: ( rXsmall ? rXsmall : 1),
                        nav: ( rXsmallNav ? true : false),
                        dots: ( rXsmallDots ? true : false)
                    },
                    480: {
                        items: ( rXmedium ? rXmedium : 2),
                        nav: ( rXmediumNav ? true : false),
                        dots: ( rXmediumDots ? true : false)
                    },
                    768: {
                        items: ( rSmall ? rSmall : 3),
                        nav: ( rSmallNav ? true : false),
                        dots: ( rSmallDots ? true : false)
                    },
                    992: {
                        items: ( rMedium ? rMedium : 5),
                        nav: ( rMediumNav ? true : false),
                        dots: ( rMediumDots ? true : false)
                    }
                }
            });
    
        });
               
  }); 
  $scope.doSearch = function() {
      vm.searchData.see_more_flag = false;
      localStorageSevice.set('searchData', vm.searchData);
      $state.go('firstNear.browseServices');
    //   console.log($state);    
      
  };
  $scope.doSeeMore = function(type) {
      vm.searchData.see_more_flag = true;
      vm.searchData.service_kind = type;
      localStorageSevice.set('searchData', vm.searchData);
     
      $state.go('firstNear.browseServices');
  }
  $scope.serviceKindChange = function (kindValue){
    vm.searchData.service_kind = kindValue;
  };
  $scope.serviceLocationChange = function(locationValue){
    vm.searchData.service_location = locationValue;
  };
  $scope.doRequestQuote = function() {
     $state.go('firstNear.requestQuote');
  };

  function displayRecommendedForYou() {

  }

  function displayRestaurantService() {

  }
  
   
  
}
