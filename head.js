const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const head = function(arr){
   return arr[0]
}

assertEqual(head([1,2,3]),1)
assertEqual(head(['Hello','Lighthouse','Labs']),'hello')