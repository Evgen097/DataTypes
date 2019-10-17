'use strict';
const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { countTypesInArray } = require(`./${file}`);


describe( "4-count-type", function () {

  const cases = [
    [ [], {}],
    [ [1, {}, null], { 'number': 1, 'object': 2}],
    [ [1, 's'], { 'number': 1, 'string': 1}],
    [ [1, 's', 2, 't', 'r', true], { 'number': 2, 'string': 3, 'boolean': 1}],
    ]
  ;

  it( "should count array items types", function () {
    cases.forEach(item => {

      expect( countTypesInArray(item[0]) ).toEqual(item[1]);
    });
  });

});









