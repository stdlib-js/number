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

# add

> Compute the sum of two double-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var add = require( '@stdlib/number/float64/base/add' );
```

#### add( x, y )

Computes the sum of two double-precision floating-point numbers.

```javascript
var v = add( -1.0, 5.0 );
// returns 4.0

v = add( 2.0, 5.0 );
// returns 7.0

v = add( 0.0, 5.0 );
// returns 5.0

v = add( -0.0, 0.0 );
// returns 0.0

v = add( NaN, NaN );
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var add = require( '@stdlib/number/float64/base/add' );

// Create arrays of random values:
var x = discreteUniform( 100, -50, 50 );
var y = discreteUniform( 100, -50, 50 );

// Perform element-wise addition:
logEachMap( '%d + %d = %d', x, y, add );
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
#include "stdlib/number/float64/base/add.h"
```

#### stdlib_base_float64_add( x, y )

Computes the sum of two double-precision floating-point numbers.

```c
double v = stdlib_base_float64_add( -5.0, 2.0 );
// returns -3.0
```

The function accepts the following arguments:

-   **x**: `[in] double` first input value.
-   **y**: `[in] double` second input value.

```c
double stdlib_base_float64_add( const double x, const double y );
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
#include "stdlib/number/float64/base/add.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };
    const double y[] = { 3.14, -3.14, -0.0, 0.0/0.0 };

    double z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_float64_add( x[ i ], y[ i ] );
        printf( "%lf + %lf = %lf\n", x[ i ], y[ i ], z );
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

-   <span class="package-name">[`@stdlib/number/float64/base/div`][@stdlib/number/float64/base/div]</span><span class="delimiter">: </span><span class="description">divide two double-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/mul`][@stdlib/number/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/sub`][@stdlib/number/float64/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/number/float64/base/div]: https://github.com/stdlib-js/number/tree/main/float64/base/div

[@stdlib/number/float64/base/mul]: https://github.com/stdlib-js/number/tree/main/float64/base/mul

[@stdlib/number/float64/base/sub]: https://github.com/stdlib-js/number/tree/main/float64/base/sub

<!-- </related-links> -->

</section>

<!-- /.links -->
