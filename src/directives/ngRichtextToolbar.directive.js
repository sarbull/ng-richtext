import 'angular';

export default directive;

import ngRichtextToolbarTemplate from '../templates/ngRichtextToolbar.tpl.html';

directive.NAME = 'ngRichtextToolbar';
directive.$inject = ['$timeout'];

directive = ($timeout) => {
  return {
    restrict: 'E',
    templateUrl: ngRichtextToolbarTemplate,
    scope: {
      ngRichtextTarget: '=',
      tools: '='
    },
    link: ($scope, $element, $attrs) => {
      $timeout(() => {
        let editor = angular.element('#' + $scope.ngRichtextTarget).find('.wrappin-on');

        $scope.action = (tool) => {
          editor.scope().focused = true;
          editor.focus();
          document.execCommand(tool, false, '');
        };
      })
    };
  }
};