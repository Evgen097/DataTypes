'use strict';
const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { inc } = require(`./${file}`);


describe( "3-by-reference", function () {

  const cases = [
    [ { n: 0 }, { n: 1 }, undefined],
    [ { n: 1 }, { n: 2 }, undefined],
    [ { n: -1 }, { n: 0 }, undefined],
    [ { n: 1000 }, { n: 1001 }, undefined]]
  ;

  it( "should increment object n property", function () {
    cases.forEach(item => {
      inc(item[0]);
      expect(item[0]).toEqual(item[1]);
    });
  });

});









