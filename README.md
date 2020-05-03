# npjs-basic

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

- ```shape(list, callback)``` - returns dimensions of input array if the array is uniform or error otherwise.

- ```full(shape_array, val)``` - returns array of shape as specified in shape_array with values = val.

- ```sum(listA, listB, callback)``` - returns array of sums of corresponding elements of listA and listB of any dimensions.

- ```subtract(listA, listB, callback)``` - returns array of differences of corresponding elements of listA and listB of any dimensions.

- ```mean(list)``` - returns mean of list elements.

- ```dot(listA, listB, callbacks)``` - returns dot product of listA and listB.

- ```min_max_normalize(list, callback)``` - returns array after applying Min-Max Normalization on list elements.

- ```linspace(start, end, num)``` - returns array of numbers in range [start, end] with length = num. Default num=50 unless specified.

- ```flatten(list)``` - returns 1-D representation of any shape and any levels of nesting of list array.

- ```norm(list)``` - returns norm as in linear algebra for list elements.

## Contribution

Happy to recieve or provide contributions related to this package. Feel free to raise an issue if you find one. [Github Link](https://github.com/hrishibawane/npjs)
