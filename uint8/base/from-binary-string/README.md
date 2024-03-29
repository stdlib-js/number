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

> Create an unsigned 8-bit integer from a [literal bit representation][@stdlib/number/uint8/base/to-binary-string].

<section class="usage">

## Usage

```javascript
var fromBinaryStringUint8 = require( '@stdlib/number/uint8/base/from-binary-string' );
```

#### fromBinaryStringUint8( bstr )

Creates an unsigned 8-bit integer from a [literal bit representation][@stdlib/number/uint8/base/to-binary-string].

```javascript
var bstr = '01010101';
var val = fromBinaryStringUint8( bstr );
// returns 85

bstr = '00000000';
val = fromBinaryStringUint8( bstr );
// returns 0

bstr = '00000010';
val = fromBinaryStringUint8( bstr );
// returns 2

bstr = '11111111';
val = fromBinaryStringUint8( bstr );
// returns 255
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toBinaryStringUint8 = require( '@stdlib/number/uint8/base/to-binary-string' );
var fromBinaryStringUint8 = require( '@stdlib/number/uint8/base/from-binary-string' );

var b;
var y;
var i;

// Convert integers to literal bit representations and then convert them back...
for ( i = 0; i < 256; i++ ) {
    b = toBinaryStringUint8( i );
    y = fromBinaryStringUint8( b );
    console.log( '%d => %s => %d', i, b, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/uint16/base/from-binary-string`][@stdlib/number/uint16/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number/uint32/base/from-binary-string`][@stdlib/number/uint32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 32-bit integer from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number/uint8/base/to-binary-string`][@stdlib/number/uint8/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 8-bit integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/number/uint8/base/to-binary-string]: https://github.com/stdlib-js/number/tree/main/uint8/base/to-binary-string

<!-- <related-links> -->

[@stdlib/number/uint16/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/uint16/base/from-binary-string

[@stdlib/number/uint32/base/from-binary-string]: https://github.com/stdlib-js/number/tree/main/uint32/base/from-binary-string

<!-- </related-links> -->

</section>

<!-- /.links -->
