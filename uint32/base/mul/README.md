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

# umul

> Perform C-like multiplication of two unsigned 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var umul = require( '@stdlib/number/uint32/base/mul' );
```

#### umul( a, b )

Performs C-like multiplication of two unsigned 32-bit integers.

```javascript
var v = umul( 10>>>0, 4>>>0 );
// returns 40

v = umul( 2147483648>>>0, 5>>>0 ); // 2^31 * 5 = 10737418240 => 32-bit integer overflow
// returns 2147483648
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function emulates C-like multiplication of two unsigned 32-bit integers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var umul = require( '@stdlib/number/uint32/base/mul' );

var randi;
var a;
var b;
var y;
var i;

randi = discreteUniform( 0, UINT32_MAX );

for ( i = 0; i < 100; i++ ) {
    a = randi()>>>0;
    b = randi()>>>0;
    y = umul( a, b );
    console.log( '%d x %d = %d', a, b, y );
}
```

</section>

<!-- /.examples -->

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
