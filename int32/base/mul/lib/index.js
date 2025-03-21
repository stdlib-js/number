/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Perform C-like multiplication of two signed 32-bit integers.
*
* @module @stdlib/number/int32/base/mul
*
* @example
* var imul = require( '@stdlib/number/int32/base/mul' );
*
* var v = imul( -10|0, 4|0 );
* // returns -40
*/

// MODULES //

var builtin = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var main;
if ( typeof builtin === 'function' ) {
	main = builtin;
} else {
	main = polyfill;
}


// EXPORTS //

module.exports = main;
