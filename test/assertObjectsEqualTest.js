 const assertObjectsEqual = require('../assertObjectsEqual')

/// Test Cases - Primitives as Values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

/// Test Cases - Arrays as Values

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // true 
assertObjectsEqual(cd2, dc); // false
assertObjectsEqual(ab, ba); // true
