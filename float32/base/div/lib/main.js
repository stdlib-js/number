/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var float64ToFloat32 = require( './../../../../float64/base/to-float32' );


// MAIN //

/**
* Divides two single-precision floating-point numbers `x` and `y`.
*
* @param {number} x - first input value (dividend)
* @param {number} y - second input value (divisor)
* @returns {number} result
*
* @example
* var v = divf( -1.0, 5.0 );
* // returns ~-0.2
*
* @example
* var v = divf( 2.0, 5.0 );
* // returns ~0.4
*
* @example
* var v = divf( 0.0, 5.0 );
* // returns 0.0
*
* @example
* var v = divf( -0.0, 5.0 );
* // returns -0.0
*
* @example
* var v = divf( NaN, NaN );
* // returns NaN
*/
function divf( x, y ) {
	return float64ToFloat32( float64ToFloat32( x ) / float64ToFloat32( y ) );
}


// EXPORTS //

module.exports = divf;
