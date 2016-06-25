'use strict';

describe('Service: servDeals', function () {

  // load the service's module
  beforeEach(module('atabyteApp'));

  // instantiate service
  var servDeals;
  beforeEach(inject(function (_servDeals_) {
    servDeals = _servDeals_;
  }));

  it('should do something', function () {
    expect(!!servDeals).toBe(true);
  });

});
