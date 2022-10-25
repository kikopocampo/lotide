# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install kiko25/lotide`

**Require it:**

`const _ = require('kiko25/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts whether two arrays are equal
* `assertEqual`: asserts whether two values are equal
* `assertObjectsEqual`: asserts whether two objects are equal
* `countLetters`: returns an object that lists the number of occurence of the letters in a string
* `countOnly`: returns an object that lists how many times the specified value appeared in a given array
* `eqArrays`: returns true if two arrays are equal and vice versa
* `eqObjects`: returns true if two objects are equal and vice versa
* `findKey`: returns the first matching key based on the callback
* `findKeyByValue`: returns the first matching key based on the value
* `flatten`: transforms a nested array into a non-nested array
* `head`: returns the first element of an array
* `letterPositions`: returns an object that lists the indeces of the letters of a given string
* `map`: returns the array with value manipulated based on the callback function
* `min`: returns the minimum value of an array
* `tail`: returns the array minus the first element
* `takeUntil`: returns the array and stops when it meets the criteria specified in the callback function
* `without`: returns an array without the values specified