import 'angular';
import ngRichtextToolbarTemplate from '../templates/ngRichtextToolbar.tpl.html';

export default directive;

directive.NAME = 'ngRichtextToolbar';
directive.$inject = ['$timeout'];

function directive($timeout) {
  return {
    restrict: 'E',
    template: ngRichtextToolbarTemplate,
    scope: {
      ngRichtextTarget: '=',
      tools: '='
    },
    link: ($scope, $element, $attrs) => {
      $timeout(() => {
        var editor = angular.element('#' + $scope.ngRichtextTarget).find('.wrappin-on');

        $scope.action = (tool) => {
          editor.scope().focused = true;
          editor.focus();
          document.execCommand(tool, false, '');
        };
      });
    }
  };
}
