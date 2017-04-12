import 'angular';

export default directive;

directive.NAME = 'ngContentEditable';

function directive() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: ($scope, $element, $attrs, ngModel) => {

      // view -> model
      $element.bind('blur keyup change paste', () => {
        $scope.$apply(() => {
          ngModel.$setViewValue($element.html());
        })
      });

      // model -> view
      ngModel.$render = () => {
        $element.html(ngModel.$viewValue);
      }
    }
  };
}