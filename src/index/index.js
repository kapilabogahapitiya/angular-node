// import angular from 'angular';
import core from '../core';
import IndexRoutes from './index.routes';
import IndexCtrl from './index.controller';
export default angular.module('firstNear.index', [core])
  .config(IndexRoutes)
  .controller('IndexCtrl', IndexCtrl)   
  .directive('slideit', function () {    
    return {
      link: function (scope, element, attrs) {          
        $(element).nivoSlider({          
          effect: 'fade',
          slices: 15,
          boxCols: 8,
          boxRows: 4,
          animSpeed: 500,
          pauseTime: 5000000000,
          startSlide: 0,
          directionNav: true,
          controlNavThumbs: true,
          pauseOnHover: true,
          manualAdvance: false
        });
      }
    }
  })
  .name;
