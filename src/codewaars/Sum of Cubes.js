function sumCubes(n) {
    let res = []
    for (let i = 0; i <= n; i++) {
        res.push(i)
    }
    return  res.reduce((acc, el) => acc + (el ** 3), 0)
}


const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold=0;

describe("Sum of Cubes", () => {
    it("Fixed tests", () => {
        _.shuffle( [
            [1, 1], [2, 9], [3, 36], [4, 100],
            [10, 3025], [123, 58155876]
        ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))
    });
});


//https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript