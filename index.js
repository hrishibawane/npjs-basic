const check = (list) => {
  let flag = Array.isArray(list[0]);
  let len = flag ? list[0].length : 0;
  for (let i = 0; i < list.length; i++) {
    let tmp_flag = Array.isArray(list[i]);
    let tmp_len = tmp_flag ? list[i].length : 0;
    if (flag != tmp_flag || len != tmp_len) {
      return false;
    }
    var ret = check(list[i]);
    if (!ret) return false;
  }
  return true;
};

const add_helper = (list_A, list_B, res = []) => {
  for (let i = 0; i < list_A.length; i++) {
    if (Array.isArray(list_A[i])) {
      res.push(add_helper(list_A[i], list_B[i], res[i]));
    } else {
      res[i] = list_A[i] + list_B[i];
    }
  }
  return res;
};

const add = (list_A, list_B, callback) => {
  let listA_shape, listB_shape;
  shape(list_A, (err, res) => {
    if (err) return callback(Error(err.message));
    listA_shape = res;
  });
  shape(list_B, (err, res) => {
    if (err) return callback(Error(err.message));
    listB_shape = res;
  });
  if (
    !listA_shape ||
    !listB_shape ||
    listA_shape.toString() != listB_shape.toString()
  ) {
    return callback(Error("Incompatible array shapes"));
  }

  let res = add_helper(list_A, list_B);
  return callback(null, res);
};

const sub_helper = (list_A, list_B, res = []) => {
  for (let i = 0; i < list_A.length; i++) {
    if (Array.isArray(list_A[i])) {
      res.push(sub_helper(list_A[i], list_B[i], res[i]));
    } else {
      res[i] = list_A[i] - list_B[i];
    }
  }
  return res;
};

const subtract = (list_A, list_B, callback) => {
  let listA_shape, listB_shape;
  shape(list_A, (err, res) => {
    if (err) return callback(Error(err.message));
    listA_shape = res;
  });
  shape(list_B, (err, res) => {
    if (err) return callback(Error(err.message));
    listB_shape = res;
  });
  if (
    !listA_shape ||
    !listB_shape ||
    listA_shape.toString() != listB_shape.toString()
  ) {
    return callback(Error("Incompatible array shapes"));
  }

  let res = sub_helper(list_A, list_B);
  return callback(null, res);
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
    return callback(Error("Array elements are equal"));
  } else {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      res[i] = (list[i] - min_val) / (max_val - min_val);
    }
    return callback(null, res);
  }
};

const linspace = (start, end, num = 50) => {
  var step = (end - start) / (num - 1);
  var res = [];
  for (var i = 0; i < num; i++) {
    res.push(start + step * i);
  }
  return res;
};

const shape = (list, callback) => {
  var dim_check = check(list);
  if (!dim_check) {
    return callback(Error("Uneven array dimensions"));
  }
  var result = [];
  for (;;) {
    result.push(list.length);
    if (Array.isArray(list[0])) {
      list = list[0];
    } else {
      break;
    }
  }
  return callback(null, result);
};

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

module.exports = {
  add,
  subtract,
  mean,
  dot,
  min_max_normalize,
  linspace,
  shape,
  flatten,
  norm,
};
