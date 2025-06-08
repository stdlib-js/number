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

# mul

> Multiply two unsigned 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mul = require( '@stdlib/number/uint32/base/mul' );
```

#### mul( x, y )

Multiplies two unsigned 32-bit integers.

```javascript
var v = mul( 10>>>0, 4>>>0 );
// returns 40

v = mul( 2147483648>>>0, 5>>>0 ); // 2^31 * 5 = 10737418240 => 32-bit integer overflow
// returns 2147483648
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function performs C-like multiplication of two unsigned 32-bit integers, including wraparound semantics.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var mul = require( '@stdlib/number/uint32/base/mul' );

var opts = {
    'dtype': 'uint32'
};

// Create arrays of random values:
var x = discreteUniform( 100, 0, 50, opts );
var y = discreteUniform( 100, 0, 50, opts );

// Perform element-wise multiplication:
logEachMap( '%d * %d = %d', x, y, mul );
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
#include "stdlib/number/uint32/base/mul.h"
```

#### stdlib_base_uint32_mul( x, y )

Multiplies two unsigned 32-bit integers.

```c
#include <stdint.h>

uint32_t v = stdlib_base_uint32_mul( 5, 2 );
// returns 10
```

The function accepts the following arguments:

-   **x**: `[in] uint32_t` first input value.
-   **y**: `[in] uint32_t` second input value.

```c
uint32_t stdlib_base_uint32_mul( const uint32_t x, const uint32_t y );
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
#include "stdlib/number/uint32/base/mul.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    const uint32_t x[] = { 3, 5, 10, 12 };
    const uint32_t y[] = { 6, 2, 11, 24 };

    uint32_t z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_uint32_mul( x[ i ], y[ i ] );
        printf( "%u * %u = %u\n", x[ i ], y[ i ], z );
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

-   <span class="package-name">[`@stdlib/number/int32/base/mul`][@stdlib/number/int32/base/mul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two signed 32-bit integers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/number/int32/base/mul]: https://github.com/stdlib-js/number/tree/main/int32/base/mul

<!-- </related-links> -->

</section>

<!-- /.links -->
