import 'angular';

import ngRichtextEditorTemplate from '../templates/ngRichtextEditor.tpl.html';

export default directive;

directive.$inject = ['$timeout', '$filter'];
directive.NAME = 'ngRichtextEditor';

function directive($timeout, $filter) {
  return {
    restrict: 'E',
    templateUrl: ngRichtextEditorTemplate,
    scope: {
      ngModel: '=ngModel'
    },
    link: ($scope, $element, $attrs) => {
      $scope.focused = false;

      $element.on('click', () => {
        angular.element($element).find('.content').focus();
      });

      $scope.updateModel = () => {
        $scope.ngModel.data = $filter('digestPastedContent')($scope.ngModel.data);
      };

      $element.bind('keydown keypress', (e) => {
        if(e.which === 13) {
          window.document.execCommand('formatBlock', false, 'p');
        }
      });
    }
  };
}