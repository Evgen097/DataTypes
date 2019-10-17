'use strict';

const fn = () => {
  greeting();
  function greeting() {
    return 'Hello';
  }
};


module.exports = { fn };
