# npjs

A numpy-like package for mathematical array functions and manipulations

## Introduction

npjs is a lightweight JavaScript library providing a subset of Python's numpy package. This package requires no dependencies. This package also includes some extra functions ("min_max_normalize" as of now).

## Usage

```const np = require('npjs');```

Currently all functions are supported for 1-D arrays except ```flatten()```. Supported functions:

- ```sum(listA, listB, callback)``` - returns array of sums of corresponding elements of listA and listB.

- ```subtract(listA, listB, callback)``` - returns array of differences of corresponding elements of listA and listB.

- ```mean(list)``` - returns mean of list elements.

- ```dot(listA, listB, callbacks)``` - returns dot product of listA and listB.

- ```min_max_normalize(list, callback)``` - returns array after applying Min-Max Normalization on list elements.

- ```linspace(start, end, num)``` - returns array of numbers in range [start, end] with length = num. Default num=50 unless specified.

- ```flatten(list)``` - returns 1-D representation of any shape and any levels of nesting of list array.

- ```norm(list)``` - returns norm as in linear algebra for list elements.

## Contribution

Happy to take or provide contributions related to this package. [Github Link]("https://github.com/hrishibawane/npjs")