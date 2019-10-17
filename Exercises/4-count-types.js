'use strict';

const countTypesInArray = arr => {
  const dataTypes = {};
  arr.forEach(el => {
    const elemType = typeof el;
    if (dataTypes[elemType]) ++dataTypes[elemType];
    else dataTypes[elemType] = 1;
  });
  return dataTypes;
};

module.exports = { countTypesInArray };
