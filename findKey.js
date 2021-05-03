
// Function that takes in an object and a callback
// iterate through object
// RETURN first KEY where the callback returns a truthy value
// IF no key found, RETURN undefined

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};


module.exports = findKey