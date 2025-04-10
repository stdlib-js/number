/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Computes the sum of two single-precision floating-point numbers `x` and `y`.
*
* @param {number} x - first input value
* @param {number} y - second input value
* @returns {number} sum
*
* @example
* var v = addf( -1.0, 5.0 );
* // returns 4.0
*
* @example
* var v = addf( 2.0, 5.0 );
* // returns 7.0
*
* @example
* var v = addf( 0.0, 5.0 );
* // returns 5.0
*
* @example
* var v = addf( -0.0, 0.0 );
* // returns 0.0
*
* @example
* var v = addf( NaN, NaN );
* // returns NaN
*/
function addf( x, y ) {
	return float64ToFloat32( float64ToFloat32( x ) + float64ToFloat32( y ) );
}


// EXPORTS //

module.exports = addf;
