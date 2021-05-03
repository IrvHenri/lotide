# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @irv-henri/lotide`

**Require it:**

`const _ = require('@irv-henri/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head`: Returns first element of the original array.
* `_.tail`: Returns new array without the first element of the original array.
* `_.middle`: Returns an array with the middle element(s) of the original array.
* `_.countLetters`: Returns an object with the occurrence of each letter in a given string
* `_.countOnly`: Returns the count of a specified string from a given object with multiple key value pairs.
* `_.eqArrays`: Returns whether two arrays are deeply true or not.
* `_.eqObjects`: Returns whether two objects are deeply true or not.
* `_.findKey`: A function that takes in an object and a callback function which specifies which value to return.
* `_.findKeyByValue`: A function that takes in an object and string argument . Will return the key that has the value of the string or will return undefined. 
* `_.flatten`: Converts an array of nested arrays into one single array.
* `_.letterPositions`: Accepts a string as an argument and returns an object of each letter and their index of occurrence.
* `_.map`: A map high order function clone, accepts a callback which determines elements are returned in a new array 
* `_.takeUntil`: A function that takes in a call back which specifies up until where the new array should copy the original array.
* `_.without`: Accepts two arrays , a source array and an array of values you would like to remove from source. Will return new array with removed values.
