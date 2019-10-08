const { readFileSync } = require('fs')
const wabt = require('wabt')();

const requireWat = async (watFile, importObject = {}) => {
    const parsedWat = wabt.parseWat(watFile, readFileSync(watFile, "utf8"));
    const buffer = parsedWat.toBinary({}).buffer;
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module, importObject);

    return instance.exports;
};
module.exports = requireWat;