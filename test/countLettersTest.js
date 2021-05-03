const assertEqual = require('../assertEqual')
const countLetters = require('../countLetters')

let string = "Irving";
let string2 = "Hello World";
let output = countLetters(string);
let output2 = countLetters(string2);

assertEqual(output["i"], 2);
assertEqual(output2["l"], 3);
