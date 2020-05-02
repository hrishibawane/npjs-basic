const assert = require("assert");
const np = require("../index");

let a = [[1, 2, 3, 4]];
let b = [[1, 2, 3, 4]];

describe("Add arrays", () => {
  it("should add array elements", () => {
    let c = [[2, 4, 6, 8]];
    let d;
    np.add(a, b, (err, res) => {
      if (err) {
        console.log(err.message);
      } else {
        d = res;
      }
    });
    assert(c.toString() == d.toString());
  });
});

describe("Subtract arrays", () => {
  it("should subtract array elements", () => {
    let c = [[0, 0, 0, 0]];
    let d;
    np.subtract(a, b, (err, res) => {
      if (err) {
        console.log(err.message);
      } else {
        d = res;
      }
    });
    assert(c.toString() == d.toString());
  });
});

describe("Give dimensions", () => {
    it("should return shape of input array", () => {
        let p = [[[1,2,3],[1,2,3],[1,2,3]]];
        let q = [1,3,3];
        let res_;
        np.shape(p, (err, res) => {
            if(err) {
                console.log(err.message);
            } else {
                res_ = res;
            }
        });
        assert(res_.toString() == q.toString());
    });
});
