import 'angular';
import digestPastedContentFilter from './filters/digestPastedContent.filter';
import ngContentEditableDirective from './directives/ngContentEditable.directive';
import ngRichtextEditorDirective from './directives/ngRichtextEditor.directive';
import ngRichtextToolbarDirective from './directives/ngRichtextToolbar.directive';

const MODULE_NAME = 'ngRichtext';

angular
  .module(MODULE_NAME, [])
  .filter(digestPastedContentFilter.NAME, digestPastedContentFilter)
  .directive(ngContentEditableDirective.NAME, ngContentEditableDirective)
  .directive(ngRichtextEditorDirective.NAME, ngRichtextEditorDirective)
  .directive(ngRichtextToolbarDirective.NAME, ngRichtextToolbarDirective);

export default MODULE_NAME;