# npjs-basic
[![npm](https://img.shields.io/npm/v/npjs-basic)](https://www.npmjs.com/package/npjs-basic)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)

A numpy-like package for mathematical array functions and manipulations

## Introduction

npjs is a lightweight JavaScript library providing a subset of Python's numpy package. This package is written in pure Javascript and requires no dependencies. This package also includes some extra functions ("min_max_normalize" as of now).

## Usage

```js
const np = require('npjs-basic');

let arr = [[1, 2, 3], [4, 5, 6]];

np.shape(arr, (err, res) => {
    if (err) return console.error(err);
    console.log(res);
    // res = [2, 3]
});

let flatArr = np.flatten(arr);
// flatArr = [1, 2, 3, 4, 5, 6]
```

## Functions

- ```add(listA, listB, callback)``` - returns array of sums of corresponding elements of listA and listB of any dimensions.

- ```arange(start, stop, step)``` - returns evenly spaced values within the half-open interval ```[start, stop)``` with optional step argument.

- ```dot(listA, listB, callbacks)``` - returns dot product of listA and listB.

- ```flatten(list)``` - returns 1-D representation of any shape and any levels of nesting of list array.

- ```full(shape_array, val)``` - returns array of shape as specified in shape_array with values = val.

- ```linspace(start, end, num)``` - returns array of numbers in range [start, end] with length = num. Default num=50 unless specified.

- ```mean(list)``` - returns mean of list elements.

- ```min_max_normalize(list, callback)``` - returns array after applying Min-Max Normalization on list elements.

- ```norm(list)``` - returns norm as in linear algebra for list elements.

- ```shape(list, callback)``` - returns dimensions of input array if the array is uniform or error otherwise.

- ```subtract(listA, listB, callback)``` - returns array of differences of corresponding elements of listA and listB of any dimensions.

## Contribution

Happy to recieve or provide contributions related to this package. Feel free to raise an issue if you find one. [Github Link](https://github.com/hrishibawane/npjs)
