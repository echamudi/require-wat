const { readFileSync, readFile } = require('fs');
const compiler = require('wabt')();

const requireWatAsync = async function (watFile, importObject = {}) {
    return new Promise((resolve, reject) => {
        try {
            readFile(watFile, "utf8", (err, data) => {
                const parsedWat = compiler.parseWat(watFile, data);
                const buffer = parsedWat.toBinary({}).buffer;
                WebAssembly.compile(buffer).then((wasmModule) => {
                    return WebAssembly.instantiate(wasmModule, importObject);
                }).then((instance) => {
                    resolve(instance.exports);
                });
            });
        } catch (e) {
            reject(e)
        }
    });
};
module.exports.requireWatAsync = requireWatAsync;

const requireWat = function (watFile, importObject = {}) {
    const parsedWat = compiler.parseWat(watFile, readFileSync(watFile, "utf8"));
    const buffer = parsedWat.toBinary({}).buffer;
    const wasmModule = new WebAssembly.Module(buffer);
    const instance = new WebAssembly.Instance(wasmModule, importObject);

    return instance.exports;
};
module.exports.requireWat = requireWat;