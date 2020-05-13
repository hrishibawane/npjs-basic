const assert = require("assert");
const np = require("../index");

let a = [
  [1, 2.678],
  [3, 4],
];
let b = [
  [1, 2],
  [3.9865, 4],
];

describe("Add arrays", () => {
  it("should add array elements", () => {
    np.add(a, b, (err, res) => {
      if (err) console.log(err.message);
      else console.log(res);
    });
  });
});

describe("Subtract arrays", () => {
  it("should subtract array elements", () => {
    np.subtract(a, b, (err, res) => {
      if (err) console.log(err.message);
      else console.log(res);
    });
  });
});

describe("Give dimensions", () => {
  it("should return shape of input array", () => {
    np.shape(a, (err, res) => {
      if (err) console.log(err.message);
      else console.log(res);
    });
  });
});

describe("Find mean", () => {
  it("should find mean of any array", () => {
    let res = np.mean(a);
    console.log(res);
  });
});

describe("Normalize array", () => {
  it("should return normalized values", () => {
    np.min_max_normalize(b, (err, res) => {
      if (err) console.log(err.message);
      else console.log(res);
    });
  });
});

describe("Return array of specified size and value", () => {
  it("should return array", () => {
    let shape = [2,3,4];
    let res_ = np.full(shape, 8);
    console.log(res_);
    np.shape(res_, (err, res) => {
      if(err) console.log(err.message);
      else assert(res.toString() == shape.toString());
    });
  });
});

describe("Return evenly spaced values within given interval", () => {
  it("should return array", () => {
    let res = np.arange(2, 20, 6);
    console.log(res);
  });
});
