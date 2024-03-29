<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameValueZero

> Test if two double-precision floating-point numbers are the same value.

<section class="usage">

## Usage

```javascript
var isSameValueZero = require( '@stdlib/number/float64/base/assert/is-same-value-zero' );
```

#### isSameValueZero( a, b )

Tests if two double-precision floating-point numbers `a` and `b` are the same value.

```javascript
var bool = isSameValueZero( 3.14, 3.14 );
// returns true

bool = isSameValueZero( 5.0, 3.0 );
// returns false
```

In contrast to the strict equality operator `===`, the function treats `NaNs` as the same value.

<!-- eslint-disable use-isnan -->

```javascript
var bool = ( NaN === NaN );
// returns false

bool = isSameValueZero( NaN, NaN );
// returns true
```

In contrast to the [SameValue Algorithm][@stdlib/number/float64/base/assert/is-same-value] (as specified in ECMAScript 5), the function does not distinguish between `+0` and `-0`.

<!-- eslint-disable no-compare-neg-zero -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValueZero( 0.0, -0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameValueZero = require( '@stdlib/number/float64/base/assert/is-same-value-zero' );

var bool = isSameValueZero( 3.14, 3.14 );
// returns true

bool = isSameValueZero( 0.0, 0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true

bool = isSameValueZero( NaN, NaN );
// returns true
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
#include "stdlib/number/float64/base/assert/is_same_value_zero.h"
```

#### stdlib_base_float64_is_same_value_zero( a, b )

Tests if two double-precision floating-point numbers `a` and `b` are the same value.

```c
#include <stdbool.h>

bool v = stdlib_base_float64_is_same_value_zero( 3.14, 3.14 );
// returns true

v = stdlib_base_float64_is_same_value_zero( 0.0, -0.0 );
// returns true
```

The function accepts the following arguments:

-   **a**: `[in] double` first input value.
-   **b**: `[in] double` second input value.

```c
bool stdlib_base_float64_is_same_value_zero( const double a, const double b );
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
#include "stdlib/number/float64/base/assert/is_same_value_zero.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const double a[] = {
        5.0,
        -2.0,
        0.0,
        0.0/0.0
    };
    const double b[] = {
        5.0,
        2.0,
        -0.0,
        0.0/0.0
    };

    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_base_float64_is_same_value_zero( a[ i ], b[ i ] );
        printf( "Same value? %s\n", ( v ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/number/float64/base/assert/is-same-value]: https://github.com/stdlib-js/number/tree/main/float64/base/assert/is-same-value

</section>

<!-- /.links -->
