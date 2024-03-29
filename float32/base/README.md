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

# Float32

> Base utilities for single-precision floating-point numbers.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number/float32/base' );
```

#### ns

Base utilities for single-precision floating-point numbers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/number/float32/base/assert]</span><span class="delimiter">: </span><span class="description">base single-precision floating-point number assert functions.</span>
-   <span class="signature">[`exponentf( x )`][@stdlib/number/float32/base/exponent]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the unbiased exponent of a single-precision floating-point number.</span>
-   <span class="signature">[`fromBinaryStringf( bstr )`][@stdlib/number/float32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an IEEE 754 literal bit representation.</span>
-   <span class="signature">[`fromWordf( word )`][@stdlib/number/float32/base/from-word]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.</span>
-   <span class="signature">[`normalizef()`][@stdlib/number/float32/base/normalize]</span><span class="delimiter">: </span><span class="description">return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.</span>
-   <span class="signature">[`signbitf( x )`][@stdlib/number/float32/base/signbit]</span><span class="delimiter">: </span><span class="description">return a boolean indicating if the sign bit for a single-precision floating-point number is on (true) or off (false).</span>
-   <span class="signature">[`significandf( x )`][@stdlib/number/float32/base/significand]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`toBinaryStringf( x )`][@stdlib/number/float32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a single-precision floating-point number.</span>
-   <span class="signature">[`float32ToInt32( x )`][@stdlib/number/float32/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert a single-precision floating-point number to a signed 32-bit integer.</span>
-   <span class="signature">[`float32ToUint32( x )`][@stdlib/number/float32/base/to-uint32]</span><span class="delimiter">: </span><span class="description">convert a single-precision floating-point number to an unsigned 32-bit integer.</span>
-   <span class="signature">[`toWordf( x )`][@stdlib/number/float32/base/to-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number.</span>

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
var ns = require( '@stdlib/number/float32/base' );

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

[@stdlib/number/float32/base/assert]: https://github.com/stdlib-js/number/tree/main/float32/base/assert

[@stdlib/number/float32/base/exponent]: https://github.com/stdlib-js/number/tree/main/float32/base/exponent

[@stdlib/number/float32/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/float32/base/from-binary-string

[@stdlib/number/float32/base/from-word]: https://github.com/stdlib-js/number/tree/main/float32/base/from-word

[@stdlib/number/float32/base/normalize]: https://github.com/stdlib-js/number/tree/main/float32/base/normalize

[@stdlib/number/float32/base/signbit]: https://github.com/stdlib-js/number/tree/main/float32/base/signbit

[@stdlib/number/float32/base/significand]: https://github.com/stdlib-js/number/tree/main/float32/base/significand

[@stdlib/number/float32/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/float32/base/to-binary-string

[@stdlib/number/float32/base/to-int32]: https://github.com/stdlib-js/number/tree/main/float32/base/to-int32

[@stdlib/number/float32/base/to-uint32]: https://github.com/stdlib-js/number/tree/main/float32/base/to-uint32

[@stdlib/number/float32/base/to-word]: https://github.com/stdlib-js/number/tree/main/float32/base/to-word

<!-- </toc-links> -->

</section>

<!-- /.links -->
