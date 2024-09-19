const assert = require('assert');
const { calculate } = require('../index');

describe('calculate', function() {
    it('should return the sum of two numbers when operation is add', function() {
        assert.strictEqual(calculate(3, 2, 'add'), 5);
    });

    it('should return the difference of two numbers when operation is subtract', function() {
        assert.strictEqual(calculate(5, 2, 'subtract'), 3);
    });

    it('should throw an error for invalid operations', function() {
        assert.throws(() => calculate(5, 2, 'division'), Error);
    });
});
