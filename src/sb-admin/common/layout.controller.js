LayoutCtrl.$inject = ['$rootScope', '$scope', 'FIRSTNEAR_CONSTANTS', '$interval', 'localStorageService', 'JwtService', 'Notification','$window','$document'];

export default function LayoutCtrl($rootScope, $scope, FIRSTNEAR_CONSTANTS, $interval, localStorageService, JwtService, Notification, $window,$document) {
  /*jshint validthis: true */
  var vm = this;
  vm.expand = true;
  
  var sessionExpiredNotificationHTML =
    '<form>' +
    '  <p>Your session is about to expire.<br/>Click Reload to continue your session.</p>\n'+
    '  <div><button class="form-control" type="button" onClick="location.reload();">Reload</button></div>\n'+
    '</form>';

  // expandIfNoOrgs();
  // function expandIfNoOrgs() {
    // OrgsService.loadAccountOrgs().then(function (orgs) {
    //   if (_.isEmpty(orgs)) {
    //     vm.expand = true;
    //   } else {
    //     vm.expand = false;
    //   }
    // });
  // }

  $rootScope.$on('header:refreshSideMenu', function(event, data){
    // expandIfNoOrgs();
  });
  

  function monitorJWT() {
    var jwt = localStorageService.get('jwt');

    if(_.isEmpty(jwt)) {
      return;
    }

    if(JwtService.hasTokenAboutToExpired(jwt)) {
      $scope.$broadcast('alert-session-expired-soon');
    }
  }

  var stopRefresh = $interval(function(){
    monitorJWT();
  }, 60 * FIRSTNEAR_CONSTANTS.delayRefreshTokenInMins * 1000);

  $scope.$on('$destroy', function() {
    if (angular.isDefined(stopRefresh)) {
      $interval.cancel(stopRefresh);
      stopRefresh = undefined;
    }
  });

  $scope.$on('alert-session-expired-soon', function(){
    $interval.cancel(stopRefresh);
    Notification.error({
      message: sessionExpiredNotificationHTML,
      replaceMessage: true,
      closeOnClick: true,
      delay: FIRSTNEAR_CONSTANTS.hideWarningTokenExpiryAfterSecs*1000
    });
  });
  angular.element($document).bind("ready",function(){
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
  });
  angular.element($window).bind("scroll", function() {   
    
        var s = $('#sticker'),
        w = $('.wrapper'),
        h = s.outerHeight(),
        windowpos = $(window).scrollTop(),
        windowWidth = $(window).width(),
        h1 = s.parent('.header1-area'),
        h2 = s.parent('.header2-area'),
        h3 = s.parent('.header3-area'),
        h3H = h3.find('.header-top-area').outerHeight(),
        topBar = s.prev('.header-top-area');

    if (windowWidth > 767) {
        w.css('padding-top', '');
        var topBarH, mBottom = 0;
        if (h1.length) {
            topBarH = h = 1;
            mBottom = 0;
        } else if (h2.length) {
            mBottom = h2.find('.header-bottom-area').outerHeight();
            topBarH = topBar.outerHeight();
        } else if (h3.length) {
            topBarH = topBar.outerHeight();
        }

        if (windowpos >= topBarH) {
            s.addClass('stick');
            if (h2.length) {
                topBar.css('margin-bottom', mBottom + 'px');
            }
        } else {
            s.removeClass('stick');
            if (h2.length) {
                topBar.css('margin-bottom', 0);
            }
        }
    }
  });
}
