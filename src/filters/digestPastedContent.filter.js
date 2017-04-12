import 'angular';

export default filter;

filter.NAME = 'digestPastedContent';

filter = () => {
  return (input) => {
    return input.replace(/<[^p|^b|^strong|^i|^u|^\/](.*?)>|<\/([^b|^strong|^i|^u|^p].*?)>|<br\/>|<br \/>|style="(.*?)"|style='(.*?)'|class="(.*?)"|class='(.*?)'/g, '');
  };
};