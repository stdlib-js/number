/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MODULES //

var imul = require( './../../../../int32/base/mul' );


// VARIABLES //

// 0xFFFF = 65535 => 0000000000000000 11111111 11111111
var MASK = 0xFFFF;


// MAIN //

/**
* Multiplies two unsigned 16-bit integers `x` and `y`.
*
* @param {integer} x - first input value
* @param {integer} y - second input value
* @returns {integer} result
*
* @example
* var v = mul( 5, 1 );
* // returns 5
*
* @example
* var v = mul( 5, 2 );
* // returns 10
*
* @example
* var v = mul( 5, 0 );
* // returns 0
*/
function mul( x, y ) {
	// Cast `x` and `y` to signed 32-bit integers and apply a mask which keeps only the lowest 16 bits:
	return imul( x|0, y|0 ) & MASK; // 65535^2 = 42949365225, which overflows signed 32-bit integer; however, by using `imul`, we emulate C-like two's complement wraparound semantics, which allows us to just keep the last 16-bits
}


// EXPORTS //

module.exports = mul;
