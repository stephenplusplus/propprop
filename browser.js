!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.prop=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Focm2+":[function(_dereq_,module,exports){
module.exports = function (propertyName) {
  return function (item) {
    if (propertyName in item) {
      return item[propertyName];
    } else {
      throw new Error('"' + propertyName + '" is not in object. ' + JSON.stringify(item, null, 2));
    }
  };
};

},{}],"prop":[function(_dereq_,module,exports){
module.exports=_dereq_('Focm2+');
},{}]},{},["Focm2+"])
("Focm2+")
});