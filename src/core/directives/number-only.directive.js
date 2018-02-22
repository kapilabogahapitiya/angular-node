// Usage
// input(type="text", name="xyz", ng-model="vm.inputNumberOnly", number-only)

export default function NumberOnlyDirective() {
  return  {
    require: 'ngModel',
    link: function(scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (inputValue) {
        if (inputValue === undefined || inputValue === null) return '';
        var transformedInput = inputValue.replace(/[^0-9-]/g, '');
        if (transformedInput!=inputValue) {
          modelCtrl.$setViewValue(transformedInput);
          modelCtrl.$render();
        }
        return transformedInput;
      });
    }
  };
}