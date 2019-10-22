const { readFileSync } = require('fs')
const compiler = require('wabt')();

const requireWat = async function (watFile, importObject = {}) {
    return new Promise((resolve, reject) => {
        try {
            const parsedWat = compiler.parseWat(watFile, readFileSync(watFile, "utf8"));
            const buffer = parsedWat.toBinary({}).buffer;

            WebAssembly.compile(buffer).then((wasmModule) => {
                return WebAssembly.instantiate(wasmModule, importObject);
            }).then((instance) => {
                resolve(instance.exports);
            });

        } catch (e) {
            reject(e)
        }
    });
};
module.exports.requireWat = requireWat;

const requireWatSync = function (watFile, importObject = {}) {
    const parsedWat = compiler.parseWat(watFile, readFileSync(watFile, "utf8"));
    const buffer = parsedWat.toBinary({}).buffer;
    const wasmModule = new WebAssembly.Module(buffer);
    const instance = new WebAssembly.Instance(wasmModule, importObject);

    return instance.exports;
};
module.exports.requireWatSync = requireWatSync;