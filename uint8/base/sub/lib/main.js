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

// VARIABLES //

// 0xFF = 255 => 000000000000000000000000 11111111
var MASK = 0xFF;


// MAIN //

/**
* Subtracts two unsigned 8-bit integers `x` and `y`.
*
* @param {uinteger} x - first input value
* @param {uinteger} y - second input value
* @returns {uinteger} result
*
* @example
* var v = sub( 5, 1 );
* // returns 4
*
* @example
* var v = sub( 5, 2 );
* // returns 3
*
* @example
* var v = sub( 5, 0 );
* // returns 5
*/
function sub( x, y ) {
	// Cast `x` and `y` to signed 32-bit integers and apply a mask which keeps only the lowest 8 bits:
	return ( (x|0) - (y|0) ) & MASK;
}


// EXPORTS //

module.exports = sub;
