;(function (name, global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory() : typeof define === 'function' && define.amd
      ? define(factory) : global[name] = factory();
}('asyncLoop', this, function () {
  'use strict';
  return function asyncLoop (iterations, iterator, done) {
    var index = 0;
    function loop () {
      if (index < iterations) {
        iterator(index++, loop);
      } else {
        done();
      }
    }
    loop();
  };
}));
