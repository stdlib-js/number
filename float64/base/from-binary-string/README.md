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

> Create a [double-precision floating-point number][ieee754] from a [literal bit representation][@stdlib/number/float64/base/to-binary-string].

<section class="usage">

## Usage

```javascript
var fromBinaryString = require( '@stdlib/number/float64/base/from-binary-string' );
```

#### fromBinaryString( bstr )

Creates a [double-precision floating-point number][ieee754] from a [literal bit representation][@stdlib/number/float64/base/to-binary-string].

```javascript
var bstr = '0100000000010000000000000000000000000000000000000000000000000000';
var val = fromBinaryString( bstr );
// returns 4.0

bstr = '0100000000001001001000011111101101010100010001000010110100011000';
val = fromBinaryString( bstr );
// returns 3.141592653589793

bstr = '1111111111100001110011001111001110000101111010111100100010100000';
val = fromBinaryString( bstr );
// returns -1.0e308
```

The function handles [subnormals][subnormals].

```javascript
var bstr = '1000000000000000000000000000000000000000000000000001100011010011';
var val = fromBinaryString( bstr );
// returns -3.14e-320

bstr = '0000000000000000000000000000000000000000000000000000000000000001';
val = fromBinaryString( bstr );
// returns 5.0e-324
```

The function handles special values.

```javascript
var bstr = '0000000000000000000000000000000000000000000000000000000000000000';
var val = fromBinaryString( bstr );
// returns 0.0

bstr = '1000000000000000000000000000000000000000000000000000000000000000';
val = fromBinaryString( bstr );
// returns -0.0

bstr = '0111111111111000000000000000000000000000000000000000000000000000';
val = fromBinaryString( bstr );
// returns NaN

bstr = '0111111111110000000000000000000000000000000000000000000000000000';
val = fromBinaryString( bstr );
// returns Infinity

bstr = '1111111111110000000000000000000000000000000000000000000000000000';
val = fromBinaryString( bstr );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
var fromBinaryString = require( '@stdlib/number/float64/base/from-binary-string' );

var frac;
var sign;
var exp;
var b;
var x;
var y;
var i;

// Convert random numbers to literal bit representations and then convert them back...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*100.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    b = toBinaryString( x );
    y = fromBinaryString( b );
    console.log( '%d => %s => %d', x, b, y );
    console.log( x === y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/float32/base/from-binary-string`][@stdlib/number/float32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/to-binary-string`][@stdlib/number/float64/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

[@stdlib/number/float64/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/float64/base/to-binary-string

<!-- <related-links> -->

[@stdlib/number/float32/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/float32/base/from-binary-string

<!-- </related-links> -->

</section>

<!-- /.links -->
