<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# reviveNumber

> Revive a JSON-serialized number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveNumber = require( '@stdlib/number/float64/reviver' );
```

#### reviveNumber( key, value )

Revives a JSON-serialized number.

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"float64","value":"NaN"}';

var buf = parseJSON( str, reviveNumber );
// returns NaN
```

For details on the JSON serialization format, see [`@stdlib/number/float64/to-json`][@stdlib/number/float64/to-json].

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
var parseJSON = require( '@stdlib/utils/parse-json' );
var number2json = require( '@stdlib/number/float64/to-json' );
var reviveNumber = require( '@stdlib/number/float64/reviver' );

var str = JSON.stringify( number2json( NaN ) );
console.log( str );
// => '{"type":"float64","value":"NaN"}'

var out = parseJSON( str, reviveNumber );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => NaN
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number/float64/to-json`][@stdlib/number/float64/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/number/float64/to-json]: https://github.com/stdlib-js/number/tree/main/float64/to-json

</section>

<!-- /.links -->
