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

# umuldw

> Compute the double word product of two unsigned 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var umuldw = require( '@stdlib/number/uint32/base/muldw' );
```

#### umuldw( a, b )

Multiplies two unsigned 32-bit integers and returns an `array` of two unsigned 32-bit integers (in big endian order) which represents the unsigned 64-bit integer product.

```javascript
var v = umuldw( 1, 10 );
// returns [ 0, 10 ]

v = umuldw( 0x80000000, 0x80000000 ); // 2^31 * 2^31 = 4611686018427388000 => 32-bit integer overflow
// returns [ 1073741824, 0 ]
```

#### umuldw.assign( a, b, out, stride, offset )

Multiplies two unsigned 32-bit integers and assigns results representing the unsigned 64-bit integer product (in big endian order) to a provided output array.

```javascript
var out = [ 0, 0 ];

var v = umuldw.assign( 1, 10, out, 1, 0 );
// returns [ 0, 10 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to **avoid** exceeding the [maximum safe double-precision floating-point integer value][@stdlib/constants/float64/max-safe-integer].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lpad = require( '@stdlib/string/left-pad' );
var umuldw = require( '@stdlib/number/uint32/base/muldw' );

var i;
var j;
var y;

for ( i = 0xFFFFFFF0; i < 0xFFFFFFFF; i++ ) {
    for ( j = i; j < 0xFFFFFFFF; j++) {
        y = umuldw( i, j );
        console.log( '%d x %d = 0x%s%s', i, j, lpad( y[0].toString( 16 ), 8, '0' ), lpad( y[1].toString( 16 ), 8, '0' ) );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/int32/base/muldw`][@stdlib/number/int32/base/muldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="package-name">[`@stdlib/number/uint32/base/mul`][@stdlib/number/uint32/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two unsigned 32-bit integers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/constants/float64/max-safe-integer]: https://github.com/stdlib-js/constants-float64-max-safe-integer

<!-- <related-links> -->

[@stdlib/number/int32/base/muldw]: https://github.com/stdlib-js/number/tree/main/int32/base/muldw

[@stdlib/number/uint32/base/mul]: https://github.com/stdlib-js/number/tree/main/uint32/base/mul

<!-- </related-links> -->

</section>

<!-- /.links -->
