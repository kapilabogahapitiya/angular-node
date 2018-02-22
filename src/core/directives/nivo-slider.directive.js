// Usage
// -----
// <div class="slider-wrapper">
//   <nivo-slider id="slider" class="nivoSlider">
//     <img data-ng-repeat="file in files" data-ng-src="{{file.content}}" alt="" />
//   </nivo-slider>
// </div>

export default function NivoSliderDirective() {
  return  {
    require: 'ngModel',
    link: function(scope, element, attrs) {
      scope.$apply(function () {
        $(element).nivoSlider();
      });
    }
  };
}