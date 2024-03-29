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

# Float64

> Base utilities for double-precision floating-point numbers.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number/float64/base' );
```

#### ns

Base utilities for double-precision floating-point numbers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/number/float64/base/assert]</span><span class="delimiter">: </span><span class="description">base double-precision floating-point number assert functions.</span>
-   <span class="signature">[`exponent( x )`][@stdlib/number/float64/base/exponent]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the unbiased exponent of a double-precision floating-point number.</span>
-   <span class="signature">[`fromBinaryString( bstr )`][@stdlib/number/float64/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a literal bit representation.</span>
-   <span class="signature">[`fromInt64Bytes( bytes, stride, offset )`][@stdlib/number/float64/base/from-int64-bytes]</span><span class="delimiter">: </span><span class="description">convert a signed 64-bit integer byte array to a double-precision floating-point number.</span>
-   <span class="signature">[`fromWords( high, low )`][@stdlib/number/float64/base/from-words]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a higher order word and a lower order word.</span>
-   <span class="signature">[`getHighWord( x )`][@stdlib/number/float64/base/get-high-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`getLowWord( x )`][@stdlib/number/float64/base/get-low-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the less significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`normalize( x )`][@stdlib/number/float64/base/normalize]</span><span class="delimiter">: </span><span class="description">return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.</span>
-   <span class="signature">[`setHighWord( x, high )`][@stdlib/number/float64/base/set-high-word]</span><span class="delimiter">: </span><span class="description">set the more significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`setLowWord( x, low )`][@stdlib/number/float64/base/set-low-word]</span><span class="delimiter">: </span><span class="description">set the less significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`signbit( x )`][@stdlib/number/float64/base/signbit]</span><span class="delimiter">: </span><span class="description">return a boolean indicating if the sign bit for a double-precision floating-point number is on (true) or off (false).</span>
-   <span class="signature">[`toBinaryString( x )`][@stdlib/number/float64/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a double-precision floating-point number.</span>
-   <span class="signature">[`float64ToFloat32( x )`][@stdlib/number/float64/base/to-float32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to the nearest single-precision floating-point number.</span>
-   <span class="signature">[`float64ToInt32( x )`][@stdlib/number/float64/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to a signed 32-bit integer.</span>
-   <span class="signature">[`float64ToInt64Bytes( x )`][@stdlib/number/float64/base/to-int64-bytes]</span><span class="delimiter">: </span><span class="description">convert an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).</span>
-   <span class="signature">[`float64ToUint32( x )`][@stdlib/number/float64/base/to-uint32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to an unsigned 32-bit integer.</span>
-   <span class="signature">[`toWords( x )`][@stdlib/number/float64/base/to-words]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a higher order word and a lower order word.</span>

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
var ns = require( '@stdlib/number/float64/base' );

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

[@stdlib/number/float64/base/assert]: https://github.com/stdlib-js/number/tree/main/float64/base/assert

[@stdlib/number/float64/base/exponent]: https://github.com/stdlib-js/number/tree/main/float64/base/exponent

[@stdlib/number/float64/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/float64/base/from-binary-string

[@stdlib/number/float64/base/from-int64-bytes]: https://github.com/stdlib-js/number/tree/main/float64/base/from-int64-bytes

[@stdlib/number/float64/base/from-words]: https://github.com/stdlib-js/number/tree/main/float64/base/from-words

[@stdlib/number/float64/base/get-high-word]: https://github.com/stdlib-js/number/tree/main/float64/base/get-high-word

[@stdlib/number/float64/base/get-low-word]: https://github.com/stdlib-js/number/tree/main/float64/base/get-low-word

[@stdlib/number/float64/base/normalize]: https://github.com/stdlib-js/number/tree/main/float64/base/normalize

[@stdlib/number/float64/base/set-high-word]: https://github.com/stdlib-js/number/tree/main/float64/base/set-high-word

[@stdlib/number/float64/base/set-low-word]: https://github.com/stdlib-js/number/tree/main/float64/base/set-low-word

[@stdlib/number/float64/base/signbit]: https://github.com/stdlib-js/number/tree/main/float64/base/signbit

[@stdlib/number/float64/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/float64/base/to-binary-string

[@stdlib/number/float64/base/to-float32]: https://github.com/stdlib-js/number/tree/main/float64/base/to-float32

[@stdlib/number/float64/base/to-int32]: https://github.com/stdlib-js/number/tree/main/float64/base/to-int32

[@stdlib/number/float64/base/to-int64-bytes]: https://github.com/stdlib-js/number/tree/main/float64/base/to-int64-bytes

[@stdlib/number/float64/base/to-uint32]: https://github.com/stdlib-js/number/tree/main/float64/base/to-uint32

[@stdlib/number/float64/base/to-words]: https://github.com/stdlib-js/number/tree/main/float64/base/to-words

<!-- </toc-links> -->

</section>

<!-- /.links -->
