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

# divf

> Divide two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var divf = require( '@stdlib/number/float32/base/div' );
```

#### divf( x, y )

Divides two single-precision floating-point numbers.

```javascript
var v = divf( -1.0, 5.0 );
// returns ~-0.2

v = divf( 2.0, 5.0 );
// returns ~0.4

v = divf( 0.0, 5.0 );
// returns 0.0

v = divf( -0.0, 5.0 );
// returns -0.0

v = divf( NaN, NaN );
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
var rand = require( '@stdlib/random/base/discrete-uniform' );
var divf = require( '@stdlib/number/float32/base/div' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = rand( -50, 50 );
    y = rand( -50, 50 );
    console.log( '%d / %d = %d', x, y, divf( x, y ) );
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
#include "stdlib/number/float32/base/div.h"
```

#### stdlib_base_float32_div( x, y )

Divides two single-precision floating-point numbers.

```c
float v = stdlib_base_float32_div( -5.0f, 2.0f );
// returns -2.5f
```

The function accepts the following arguments:

-   **x**: `[in] float` first input value (dividend).
-   **y**: `[in] float` second input value (divisor).

```c
float stdlib_base_float32_div( const float x, const float y );
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
#include "stdlib/number/float32/base/div.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };
    const float y[] = { 3.14f, -3.14f, -5.0f, 0.0f/0.0f };

    float z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_float32_div( x[ i ], y[ i ] );
        printf( "%f / %f = %f\n", x[ i ], y[ i ], z );
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

-   <span class="package-name">[`@stdlib/number/float32/base/add`][@stdlib/number/float32/base/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two single-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/div`][@stdlib/number/float64/base/div]</span><span class="delimiter">: </span><span class="description">divide two double-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/number/float32/base/mul`][@stdlib/number/float32/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two single-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/number/float32/base/sub`][@stdlib/number/float32/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two single-precision floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/number/float32/base/add]: https://github.com/stdlib-js/number/tree/main/float32/base/add

[@stdlib/number/float64/base/div]: https://github.com/stdlib-js/number/tree/main/float64/base/div

[@stdlib/number/float32/base/mul]: https://github.com/stdlib-js/number/tree/main/float32/base/mul

[@stdlib/number/float32/base/sub]: https://github.com/stdlib-js/number/tree/main/float32/base/sub

<!-- </related-links> -->

</section>

<!-- /.links -->
