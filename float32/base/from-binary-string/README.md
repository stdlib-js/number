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

> Create a [single-precision floating-point number][ieee754] from an [IEEE 754 literal bit representation][@stdlib/number/float32/base/to-binary-string].

<section class="usage">

## Usage

```javascript
var fromBinaryStringf = require( '@stdlib/number/float32/base/from-binary-string' );
```

#### fromBinaryStringf( bstr )

Creates a [single-precision floating-point number][ieee754] from an [IEEE 754 literal bit representation][@stdlib/number/float32/base/to-binary-string].

```javascript
var bstr = '01000000100000000000000000000000';
var v = fromBinaryStringf( bstr );
// returns 4.0

bstr = '01000000010010010000111111011011';
v = fromBinaryStringf( bstr );
// returns ~3.14

bstr = '11111111011011000011101000110011';
v = fromBinaryStringf( bstr );
// returns ~-3.14e+38
```

The function handles [subnormals][subnormals].

```javascript
var bstr = '10000000000000000000000000010110';
var val = fromBinaryStringf( bstr );
// returns ~-3.08e-44

bstr = '00000000000000000000000000000001';
val = fromBinaryStringf( bstr );
// returns ~1.40e-45
```

The function handles special values.

```javascript
var bstr = '00000000000000000000000000000000';
var val = fromBinaryStringf( bstr );
// returns 0.0

bstr = '10000000000000000000000000000000';
val = fromBinaryStringf( bstr );
// returns -0.0

bstr = '01111111110000000000000000000000';
val = fromBinaryStringf( bstr );
// returns NaN

bstr = '01111111100000000000000000000000';
val = fromBinaryStringf( bstr );
// returns Infinity

bstr = '11111111100000000000000000000000';
val = fromBinaryStringf( bstr );
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
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var toBinaryStringf = require( '@stdlib/number/float32/base/to-binary-string' );
var fromBinaryStringf = require( '@stdlib/number/float32/base/from-binary-string' );

var frac;
var sign;
var exp;
var b;
var x;
var y;
var i;

// Convert random numbers to IEEE 754 literal bit representations and then convert them back...
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
    x = toFloat32( x );

    b = toBinaryStringf( x );
    y = fromBinaryStringf( b );

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

-   <span class="package-name">[`@stdlib/number/float32/base/to-binary-string`][@stdlib/number/float32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/from-binary-string`][@stdlib/number/float64/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a literal bit representation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

[@stdlib/number/float32/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/float32/base/to-binary-string

<!-- <related-links> -->

[@stdlib/number/float64/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/float64/base/from-binary-string

<!-- </related-links> -->

</section>

<!-- /.links -->
