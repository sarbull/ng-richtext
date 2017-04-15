describe('The digestPastedContent filter', function () {
  'use strict';

  var $filter;

  beforeEach(function () {
    module('ngRichtext');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should reject <pre> and </pre> tags', function () {
    var htmlString = '<p>hello world with <pre> and </pre> tags</p>', result;

    result = $filter('digestPastedContent')(htmlString);

    expect(result).toEqual('<p>hello world with  and  tags</p>');
  });
});