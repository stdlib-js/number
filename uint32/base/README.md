<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Uint32

> Base utilities for unsigned 32-bit integers.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number/uint32/base' );
```

#### ns

Base utilities for unsigned 32-bit integers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( x, y )`][@stdlib/number/uint32/base/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two unsigned 32-bit integers.</span>
-   <span class="signature">[`fromBinaryStringUint32( bstr )`][@stdlib/number/uint32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 32-bit integer from a literal bit representation.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/number/uint32/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two unsigned 32-bit integers.</span>
-   <span class="signature">[`muldw( a, b )`][@stdlib/number/uint32/base/muldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>
-   <span class="signature">[`rotl32( x, shift )`][@stdlib/number/uint32/base/rotl]</span><span class="delimiter">: </span><span class="description">bitwise rotation to the left.</span>
-   <span class="signature">[`rotr32( x, shift )`][@stdlib/number/uint32/base/rotr]</span><span class="delimiter">: </span><span class="description">bitwise rotation to the right.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/number/uint32/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two unsigned 32-bit integers.</span>
-   <span class="signature">[`toBinaryStringUint32( x )`][@stdlib/number/uint32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 32-bit integer.</span>
-   <span class="signature">[`uint32ToInt32( x )`][@stdlib/number/uint32/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert an unsigned 32-bit integer to a signed 32-bit integer.</span>

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
var ns = require( '@stdlib/number/uint32/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/number/uint32/base/add]: https://github.com/stdlib-js/number/tree/main/uint32/base/add

[@stdlib/number/uint32/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/uint32/base/from-binary-string

[@stdlib/number/uint32/base/mul]: https://github.com/stdlib-js/number/tree/main/uint32/base/mul

[@stdlib/number/uint32/base/muldw]: https://github.com/stdlib-js/number/tree/main/uint32/base/muldw

[@stdlib/number/uint32/base/rotl]: https://github.com/stdlib-js/number/tree/main/uint32/base/rotl

[@stdlib/number/uint32/base/rotr]: https://github.com/stdlib-js/number/tree/main/uint32/base/rotr

[@stdlib/number/uint32/base/sub]: https://github.com/stdlib-js/number/tree/main/uint32/base/sub

[@stdlib/number/uint32/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/uint32/base/to-binary-string

[@stdlib/number/uint32/base/to-int32]: https://github.com/stdlib-js/number/tree/main/uint32/base/to-int32

<!-- </toc-links> -->

</section>

<!-- /.links -->
