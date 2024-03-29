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

# From Words

> Create a [double-precision floating-point number][ieee754] from a higher order word and a lower order word.

<section class="usage">

## Usage

```javascript
var fromWords = require( '@stdlib/number/float64/base/from-words' );
```

#### fromWords( high, low )

Creates a [double-precision floating-point number][ieee754] from a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`).

```javascript
var v = fromWords( 1774486211, 2479577218 );
// returns 3.14e201

v = fromWords( 3221823995, 1413754136 );
// returns -3.141592653589793

v = fromWords( 0, 0 );
// returns 0.0

v = fromWords( 2147483648, 0 );
// returns -0.0

v = fromWords( 2146959360, 0 );
// returns NaN

v = fromWords( 2146435072, 0 );
// returns Infinity

v = fromWords( 4293918720, 0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding higher and lower order words, see [to-words][@stdlib/number/float64/base/to-words].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var fromWords = require( '@stdlib/number/float64/base/from-words' );

var high;
var low;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    high = round( randu()*MAX_UINT32 );
    low = round( randu()*MAX_UINT32 );
    x = fromWords( high, low );
    console.log( 'higher: %d. lower: %d. float: %d.', high, low, x );
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
#include "stdlib/number/float64/base/from_words.h"
```

#### stdlib_base_float64_from_words( high, low, \*x )

Creates a double-precision floating-point number from a higher order word and a lower order word.

```c
#include <stdint.h>

uint32_t high = 1074339512;
uint32_t low = 1374389535;

double x;
stdlib_base_float64_from_words( high, low, &x );
```

The function accepts the following arguments:

-   **high**: `[in] uint32_t` higher order word.
-   **low**: `[in] uint32_t` lower order word.
-   **x**: `[out] double*` destination for a double-precision floating-point number.

```c
void stdlib_base_float64_from_words( const uint32_t high, const uint32_t low, double *x );
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
#include "stdlib/number/float64/base/from_words.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    uint32_t high = 1074339512;
    uint32_t low[] = { 0, 10000, 1000000, 1374389535 };

    double x;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_from_words( high, low[ i ], &x );
        printf( "high: %u, low: %u => %lf\n", high, low[ i ], x );
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

-   <span class="package-name">[`@stdlib/number/float32/base/from-word`][@stdlib/number/float32/base/from-word]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/number/float64/base/to-words]: https://github.com/stdlib-js/number/tree/main/float64/base/to-words

<!-- <related-links> -->

[@stdlib/number/float32/base/from-word]: https://github.com/stdlib-js/number/tree/main/float32/base/from-word

<!-- </related-links> -->

</section>

<!-- /.links -->
