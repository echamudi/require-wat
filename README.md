# Require WAT

Reads a WebAssembly WAT file and return the exports object.

## Releases

Please check [releases](https://github.com/echamudi/require-wat/releases) for stable versions. 
The develop branch contains latest development changes that might be unstable.

## Usage

Prepare your WAT file (`add.wat`)

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

Load the wat synchronously:

```js
const { requireWat } = require('require-wat');
const { add } = requireWat('./add.wat');

let result = add(1, 2);

console.log('1 + 2 is ' + result); // 1 + 2 is 3
```

or asynchronously:
```js
const { requireWatAsync } = require('require-wat');

requireWatAsync('./add.wat')
    .then((wasmExports) => {
        const { add } = wasmExports;
        let result = add(1, 2);

        console.log('1 + 2 is ' + result); // 1 + 2 is 3

    });
```
Please check test folder for more examples


## Development

| Branch | Status |
| - | - |
| master | [![Build Status](https://travis-ci.org/echamudi/require-wat.svg?branch=master)](https://travis-ci.org/echamudi/require-wat) |
| develop | [![Build Status](https://travis-ci.org/echamudi/require-wat.svg?branch=develop)](https://travis-ci.org/echamudi/require-wat) |

### Testing
```
npm test
```

## Contributing

This project is following [git-flow branching model](https://github.com/echamudi/echamudi-docs/blob/master/git-strategy/gitflow.png). 
- Please create a branch from `develop`.
- Name it something descriptive other than `master`, `develop`, `release-*`, or `hotfix-*`.
- Open a pull request to `develop`.

Make sure your contributions are compatible with the license of this project.

## Authors

* **Ezzat Chamudi** - [echamudi](https://github.com/echamudi)

See also the list of [contributors](https://github.com/echamudi/require-wat/graphs/contributors) who participated in this project.

## License

Copyright © 2020 [Ezzat Chamudi](https://github.com/echamudi) and [Require WAT Project Authors](https://github.com/echamudi/require-wat/graphs/contributors)

Require WAT code is licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0). Images, logos, docs, and articles in this project are released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their licenses.
