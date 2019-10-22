const { requireWat, requireWatAsync } = require('../');
const assert = require('assert');
const path = require('path');

describe('async requireWat', async function() {
    it('js can load wat function', async function() {

        const watFile = path.join(__dirname, '/calc.wat');
        const { add, sub } = await requireWatAsync(watFile);
    
        assert.deepStrictEqual(add(11,8), 19);
        assert.deepStrictEqual(sub(3,11), -8);
    });
    
    it('wat can load js function', async function() {
    
        const watFile = path.join(__dirname, '/volume.wat');
        const { cubeVolume } = await requireWatAsync(watFile, {
            calculate: {
                positivePower3: function(n) {
                    if (n <= 0) return 0;
                    return n * n * n;
                }
            }
        });
    
        assert.deepStrictEqual(cubeVolume(5), 125);
        assert.deepStrictEqual(cubeVolume(-10), 0);
    });
    
    it('js can access modified memory from wat', async function() {
    
        const watFile = path.join(__dirname, '/hello.wat');
        const { myMemory } = await requireWatAsync(watFile);
    
        const memory = new Uint8Array(myMemory.buffer, 0, 5);
        const result = String.fromCharCode(...memory);
    
        assert.deepStrictEqual(result, "hello");
    });
    
    it('wat can access modified memory from js', async function() {
    
        const watFile = path.join(__dirname, '/sumOfFiveNumbers.wat');
        const { sumOfFiveNumbers, myMemory } = await requireWatAsync(watFile);
    
        const memory = new Uint8Array(myMemory.buffer, 0, 5);
    
        assert.deepStrictEqual(sumOfFiveNumbers(), 0);
    
        memory[0] = 23;
        memory[1] = 11;
        assert.deepStrictEqual(sumOfFiveNumbers(), 34);
    
        memory[2] = 31;
        memory[3] = 91;
        memory[4] = 12;    
        assert.deepStrictEqual(sumOfFiveNumbers(), 168);
    });
});

describe('sync requireWatSync', function() {
    it('js can load wat function', function() {

        const watFile = path.join(__dirname, '/calc.wat');
        const { add, sub } = requireWat(watFile);
    
        assert.deepStrictEqual(add(11,8), 19);
        assert.deepStrictEqual(sub(3,11), -8);
    });
    
    it('wat can load js function', function() {
    
        const watFile = path.join(__dirname, '/volume.wat');
        const { cubeVolume } = requireWat(watFile, {
            calculate: {
                positivePower3: function(n) {
                    if (n <= 0) return 0;
                    return n * n * n;
                }
            }
        });
    
        assert.deepStrictEqual(cubeVolume(5), 125);
        assert.deepStrictEqual(cubeVolume(-10), 0);
    });
    
    it('js can access modified memory from wat', function() {
    
        const watFile = path.join(__dirname, '/hello.wat');
        const { myMemory } = requireWat(watFile);
    
        const memory = new Uint8Array(myMemory.buffer, 0, 5);
        const result = String.fromCharCode(...memory);
    
        assert.deepStrictEqual(result, "hello");
    });
    
    it('wat can access modified memory from js', function() {
    
        const watFile = path.join(__dirname, '/sumOfFiveNumbers.wat');
        const { sumOfFiveNumbers, myMemory } = requireWat(watFile);
    
        const memory = new Uint8Array(myMemory.buffer, 0, 5);
    
        assert.deepStrictEqual(sumOfFiveNumbers(), 0);
    
        memory[0] = 23;
        memory[1] = 11;
        assert.deepStrictEqual(sumOfFiveNumbers(), 34);
    
        memory[2] = 31;
        memory[3] = 91;
        memory[4] = 12;    
        assert.deepStrictEqual(sumOfFiveNumbers(), 168);
    });
});

// No global in node js

// it('wat can access global', async function() {

//     const global = WebAssembly.Global({value: "i32", mutable: true}, 0);

//     const watFile = path.join(__dirname, '/global.wat');
//     const { getGlobal, incGlobal } = await requireWat(watFile);

//     global.value++;
//     global.value++;

//     assert.deepStrictEqual(global.value, 2);

//     incGlobal();
//     incGlobal();
//     incGlobal();

//     assert.deepStrictEqual(global.value, 5);

//     global.value++;
//     incGlobal();

//     assert.deepStrictEqual(global.value, 7);
//     assert.deepStrictEqual(getGlobal(), 7);

// });
