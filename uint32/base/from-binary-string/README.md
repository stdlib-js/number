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

# From Binary String

> Create an unsigned 32-bit integer from a [literal bit representation][@stdlib/number/uint32/base/to-binary-string].

<section class="usage">

## Usage

```javascript
var fromBinaryStringUint32 = require( '@stdlib/number/uint32/base/from-binary-string' );
```

#### fromBinaryStringUint32( bstr )

Creates an unsigned 32-bit integer from a [literal bit representation][@stdlib/number/uint32/base/to-binary-string].

```javascript
var bstr = '01010101010101010101010101010101';
var val = fromBinaryStringUint32( bstr );
// returns 1431655765

bstr = '00000000000000000000000000000000';
val = fromBinaryStringUint32( bstr );
// returns 0

bstr = '00000000000000000000000000000010';
val = fromBinaryStringUint32( bstr );
// returns 2

bstr = '11111111111111111111111111111111';
val = fromBinaryStringUint32( bstr );
// returns 4294967295
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_UINT = require( '@stdlib/constants/uint32/max' );
var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
var fromBinaryStringUint32 = require( '@stdlib/number/uint32/base/from-binary-string' );

var b;
var x;
var y;
var i;

// Convert random integers to literal bit representations and then convert them back...
for ( i = 0; i < 100; i++ ) {
    x = round( randu()*MAX_UINT );
    b = toBinaryStringUint32( x );
    y = fromBinaryStringUint32( b );
    console.log( '%d => %s => %d', x, b, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/uint16/base/from-binary-string`][@stdlib/number/uint16/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number/uint32/base/to-binary-string`][@stdlib/number/uint32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 32-bit integer.</span>
-   <span class="package-name">[`@stdlib/number/uint8/base/from-binary-string`][@stdlib/number/uint8/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 8-bit integer from a literal bit representation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/number/uint32/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/uint32/base/to-binary-string

<!-- <related-links> -->

[@stdlib/number/uint16/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/uint16/base/from-binary-string

[@stdlib/number/uint8/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/uint8/base/from-binary-string

<!-- </related-links> -->

</section>

<!-- /.links -->
