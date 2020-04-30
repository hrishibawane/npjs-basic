const sum = (list_A, list_B, callback) => {
  if (list_A.length != list_B.length) {
    return callback(Error("Lengths of arrays must be equal"));
  } else {
    let res = [];
    for (let i = 0; i < list_A.length; i++) {
      res[i] = list_A[i] + list_B[i];
    }
    return callback(null, res);
  }
};

const subtract = (list_A, list_B, callback) => {
  if (list_A.length != list_B.length) {
    return callback(Error("Lengths of arrays must be equal"));
  } else {
    let res = [];
    for (let i = 0; i < list_A.length; i++) {
      res[i] = list_A[i] - list_B[i];
    }
    return callback(null, res);
  }
};

const mean = (list) => {
  let mean = 0;
  for (let i = 0; i < list.length; i++) {
    mean += list[i];
  }
  return mean / list.length;
};

const dot = (list_A, list_B, callback) => {
  if (list_A.length != list_B.length) {
    return callback(Error("Lengths of arrays must be equal"));
  } else {
    var res = 0;
    for (let i = 0; i < list_A.length; i++) {
      res += list_A[i] * list_B[i];
    }
    return callback(null, res);
  }
};

const min_max_normalize = (list, callback) => {
  const min_val = Math.min(...list);
  const max_val = Math.max(...list);

  if (min_val == max_val) {
    return callback(Error("Min-max normalization cannot be applied"));
  } else {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      res[i] = (list[i] - min_val) / (max_val - min_val);
    }
    return callback(null, res);
  }
};

const linspace = (start, end, num=50) => {
    var step = (end - start) / (num-1);
    var res = [];
    for (var i=0; i<num; i++) {
        res.push(start + step * i);
    }
    return res;
}


const flatten = (list, result = []) => {
  for (let i = 0, len = list.length; i < len; i++) {
    const value = list[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

const norm = (list) => {
  var res = 0;
  for (let i = 0; i < list.length; i++) {
    res += list[i] * list[i];
  }
  return Math.sqrt(res);
};

module.exports = { sum, subtract, mean, dot, min_max_normalize, linspace, flatten, norm };
