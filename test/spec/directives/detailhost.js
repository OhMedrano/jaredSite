'use strict';

describe('Directive: detailHost', function () {

  // load the directive's module
  beforeEach(module('atabyteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<detail-host></detail-host>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the detailHost directive');
  }));
});
