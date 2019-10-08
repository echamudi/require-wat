const requireWat = require('../')
const assert = require('assert');
const path = require('path');

it('loads and run correctly', async function() {
    const watFile = path.join(__dirname, '/calc.wat');

    const { add, sub } = await requireWat(watFile);

    assert.deepStrictEqual(add(5,5), 10);
    assert.deepStrictEqual(add(11,8), 19);
    assert.deepStrictEqual(sub(5,5), 0);
    assert.deepStrictEqual(sub(7,6), 1);
    assert.deepStrictEqual(sub(3,11), -8);
});