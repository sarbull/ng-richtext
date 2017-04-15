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
      $scope.action = (tool) => {
        document.execCommand(tool, false, '');
      };
    }
  };
}
