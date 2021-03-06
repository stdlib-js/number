<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Number

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Number namespace.

<section class="installation">

## Installation

```bash
npm install @stdlib/number
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number' );
```

#### ns

Number namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Number( value )`][@stdlib/number/ctor]</span><span class="delimiter">: </span><span class="description">constructor which wraps a numeric value in an object.</span>
-   <span class="signature">[`float32`][@stdlib/number/float32]</span><span class="delimiter">: </span><span class="description">utilities for single-precision floating-point numbers.</span>
-   <span class="signature">[`float64`][@stdlib/number/float64]</span><span class="delimiter">: </span><span class="description">utilities for double-precision floating-point numbers.</span>
-   <span class="signature">[`int32`][@stdlib/number/int32]</span><span class="delimiter">: </span><span class="description">utilities for signed 32-bit integers.</span>
-   <span class="signature">[`uint16`][@stdlib/number/uint16]</span><span class="delimiter">: </span><span class="description">utilities for unsigned 16-bit integers.</span>
-   <span class="signature">[`uint32`][@stdlib/number/uint32]</span><span class="delimiter">: </span><span class="description">utilities for unsigned 32-bit integers.</span>
-   <span class="signature">[`uint8`][@stdlib/number/uint8]</span><span class="delimiter">: </span><span class="description">utilities for unsigned 8-bit integers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/number' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number.svg
[npm-url]: https://npmjs.org/package/@stdlib/number

[test-image]: https://github.com/stdlib-js/number/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number/tree/deno
[umd-url]: https://github.com/stdlib-js/number/tree/umd
[esm-url]: https://github.com/stdlib-js/number/tree/esm
[branches-url]: https://github.com/stdlib-js/number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/ctor]: https://github.com/stdlib-js/number/tree/main/ctor

[@stdlib/number/float32]: https://github.com/stdlib-js/number/tree/main/float32

[@stdlib/number/float64]: https://github.com/stdlib-js/number/tree/main/float64

[@stdlib/number/int32]: https://github.com/stdlib-js/number/tree/main/int32

[@stdlib/number/uint16]: https://github.com/stdlib-js/number/tree/main/uint16

[@stdlib/number/uint32]: https://github.com/stdlib-js/number/tree/main/uint32

[@stdlib/number/uint8]: https://github.com/stdlib-js/number/tree/main/uint8

<!-- </toc-links> -->

</section>

<!-- /.links -->
