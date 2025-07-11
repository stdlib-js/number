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

var f32 = require( './../../../../../float64/base/to-float32' );
var ulpdiff = require( './../../../../../float32/base/ulp-difference' );


// MAIN //

/**
* Tests if two single-precision floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value is `NaN`.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param {number} a - first input value
* @param {number} b - second input value
* @param {number} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating whether two single-precision floating-point numbers are approximately equal within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
*
* var bool = isAlmostEqualValue( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostEqualValue( 1.0+EPS, 1.0, 1 );
* // returns true
*
* bool = isAlmostEqualValue( 1.0, 1.0+EPS+EPS, 1 );
* // returns false
*
* bool = isAlmostEqualValue( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostEqualValue( 0.0, -0.0, 0 );
* // returns true
*
* bool = isAlmostEqualValue( 1.0, NaN, 1 );
* // returns false
*
* bool = isAlmostEqualValue( NaN, NaN, 1 );
* // returns false
*/
function isAlmostEqualValue( a, b, maxULP ) {
	return ulpdiff( f32( a ), f32( b ) ) <= maxULP;
}


// EXPORTS //

module.exports = isAlmostEqualValue;
