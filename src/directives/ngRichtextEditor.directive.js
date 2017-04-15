import 'angular';

import ngRichtextEditorTemplate from '../templates/ngRichtextEditor.tpl.html';

export default directive;

directive.$inject = ['$timeout', '$filter'];
directive.NAME = 'ngRichtextEditor';

function directive($timeout, $filter) {
  return {
    restrict: 'E',
    template: ngRichtextEditorTemplate,
    scope: {
      ngModel: '=ngModel'
    },
    link: ($scope, $element, $attrs) => {

      $element.find('.content').on('click', () => {
        angular.element($element.find('.content')).addClass('focused');
      });

      $element.find('.content').on('blur', (event) => {
        if (!angular.element(event.relatedTarget).parent().is('ng-richtext-toolbar')) {
          angular.element($element.find('.content')).removeClass('focused');
        }
      });

      $scope.updateModel = () => {
        $scope.ngModel.data = $filter('digestPastedContent')($scope.ngModel.data);
      };

      $element.bind('keydown keypress', (e) => {
        if (e.which === 13) {
          window.document.execCommand('formatBlock', false, 'p');
        }
      });
    }
  };
}