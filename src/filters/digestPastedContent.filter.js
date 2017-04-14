import 'angular';

export default filter;

filter.NAME = 'digestPastedContent';

function filter() {
  return (input) => {
    return input.replace(/<[^p|^b|^strong|^i|^u|^\/](.*?)>|<\/([^b|^strong|^i|^u|^p].*?)>|<br\/>|<br \/>|<pre>|<\/pre>|style="(.*?)"|style='(.*?)'|class="(.*?)"|class='(.*?)'/g, '');
  };
};