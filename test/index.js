'use strict';

var should = require('chai').should();
var cryptorescuecore = require('../');

describe('#versionGuard', function() {
  it('global._cryptorescuecore should be defined', function() {
    should.equal(global._cryptorescuecore, cryptorescuecore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      cryptorescuecore.versionGuard('version');
    }).should.throw('More than one instance of cryptorescuecore');
  });
});
