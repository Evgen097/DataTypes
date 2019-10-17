'use strict';
const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { inc } = require(`./${file}`);


describe("2-by-value", function() {
  const cases = [
    [0, 1],
    [1, 2],
    [-1, 0],
    [10000, 10001],
    ];


  it("should increment number", function() {

    cases.forEach(item =>{
      expect(inc(item[0])).toEqual(item[1]);
    })
  });

});









