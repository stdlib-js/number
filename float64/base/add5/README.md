<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# add5

> Compute the sum of five double-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var add5 = require( '@stdlib/number/float64/base/add5' );
```

#### add5( x, y, z, w, u )

Computes the sum of five double-precision floating-point numbers.

```javascript
var v = add5( -1.0, 5.0, 2.0, -3.0, 4.0 );
// returns 7.0

v = add5( 2.0, 5.0, 2.0, -3.0, 4.0 );
// returns 10.0

v = add5( 0.0, 5.0, 2.0, -3.0, 4.0 );
// returns 8.0

v = add5( -0.0, 0.0, -0.0, -0.0, -0.0 );
// returns 0.0

v = add5( NaN, NaN, NaN, NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rand = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledBy = require( '@stdlib/array/base/filled-by' );
var add5 = require( '@stdlib/number/float64/base/add5' );

var x = filledBy( 100, rand( -50, 50 ) );
var y = filledBy( x.length, rand( -50, 50 ) );
var z = filledBy( x.length, rand( -50, 50 ) );
var w = filledBy( x.length, rand( -50, 50 ) );
var u = filledBy( x.length, rand( -50, 50 ) );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( '%d + %d + %d + %d + %d = %d', x[i], y[i], z[i], w[i], u[i], add5( x[i], y[i], z[i], w[i], u[i] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/number/float64/base/add5.h"
```

#### stdlib_base_float64_add5( x, y, z, w, u )

Computes the sum of five double-precision floating-point numbers.

```c
double out = stdlib_base_float64_add5( -5.0, 2.0, 4.0, 3.0, 1.0 );
// returns 5.0
```

The function accepts the following arguments:

-   **x**: `[in] double` first input value.
-   **y**: `[in] double` second input value.
-   **z**: `[in] double` third input value.
-   **w**: `[in] double` fourth input value.
-   **u**: `[in] double` fifth input value.

```c
double stdlib_base_float64_add5( const double x, const double y, const double z, const double w, const double u );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float64/base/add5.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };
    const double y[] = { 3.14, -3.14, -0.0, 0.0/0.0 };
    const double z[] = { 2.0, -3.0, -0.0, 0.0/0.0 };
    const double w[] = { 2.0, -3.0, -0.0, 0.0/0.0 };
    const double u[] = { -1.0, 4.0, 0.0, 0.0/0.0 };

    double out;
    int i;
    for ( i = 0; i < 4; i++ ) {
        out = stdlib_base_float64_add5( x[ i ], y[ i ], z[ i ], w[ i ], u[ i ] );
        printf( "%lf + %lf + %lf + %lf + %lf = %lf\n", x[ i ], y[ i ], z[ i ], w[ i ], u[ i ], out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/float64/base/add`][@stdlib/number/float64/base/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two double-precision floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/number/float64/base/add]: https://github.com/stdlib-js/number/tree/main/float64/base/add

<!-- </related-links> -->

</section>

<!-- /.links -->
