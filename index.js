module.exports = function (propertyName) {
  return function (item) {
    if (propertyName in item) {
      return item[propertyName];
    } else {
      throw new Error('"' + propertyName + '" not found. ' + JSON.stringify(item, null, 2));
    }
  };
};
