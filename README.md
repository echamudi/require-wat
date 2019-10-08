# Require WAT

Reads a WebAssembly WAT file and return the exports object.

## Releases

Please check [releases](https://github.com/ezhmd/require-wat/releases) for stable versions. The master branch contains latest development changes that might be unstable.

## Usage

WAT file (`add.wat`)

```wat
(module
  ;; Addition
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  ;; Export function
  (export "add" (func $add))
)
```

JS file

```js
const requireWat = require('require-wat');

(async () => {
    const { add } = await requireWat('./add.wat');

    let result = add(1, 2);

    console.log('1 + 2 is ' + result); // 1 + 2 is 3
})();
```

Please check test folder for more examples


## Development

| Branch | Status |
| - | - |
| master | [![Build Status](https://travis-ci.org/ezhmd/require-wat.svg?branch=master)](https://travis-ci.org/ezhmd/require-wat) |

### Testing
```
npm test
```

## Authors

* **Ezzat Chamudi** - [ezhmd](https://github.com/ezhmd)

See also the list of [contributors](https://github.com/ezhmd/require-wat/graphs/contributors) who participated in this project.

## License

Code and documentation copyright 2019 the [Require WAT Project Authors](https://github.com/ezhmd/require-wat/graphs/contributors). 

Require WAT code is licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0). Images, logos, docs, and articles in this Require WAT project are released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their own licenses respectively.