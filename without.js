
/* Without Function */

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let val of source) {
    
     if (val !== itemsToRemove.toString())  {
       newArray.push(val)
     } 
  }
  return newArray;
};

module.exports = without


