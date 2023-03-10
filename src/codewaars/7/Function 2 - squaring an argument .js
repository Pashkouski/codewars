const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(square(3), 9);
    });
});

const square = (arg) => arg ** 2