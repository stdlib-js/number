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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );
var toWordf = require( './../../../../float32/base/to-word' );
var abs = require( '@stdlib/math/base/special/abs' );


// FUNCTIONS //

/**
* Converts an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number to a lexicographically ordered integer.
*
* @private
* @param {unsigned32} word - unsigned 32-bit integer
* @returns {integer} lexicographically ordered integer
*/
function monotoneKey( word ) {
	if ( word & SIGN_MASK ) { // x < 0
		return ( ~word + 1 ); // two's-complement negation
	}
	// x >= 0
	return ( word | SIGN_MASK ) >>> 0; // push +0 to just above -0
}


// MAIN //

/**
* Computes the number of representable single-precision floating-point values that separate two single-precision floating-point numbers along the real number line.
*
* ## Notes
*
* -   Adjacent single-precision floating-point numbers differ by 1 ulp (unit in the last place).
* -   Signed zeros differ only in the sign bit but are considered numerically equal, and thus their ULP difference is 0.
*
* @param {number} x - first value
* @param {number} y - second value
* @returns {number} result
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
*
* var d = ulpdiff( 1.0, 1.0+EPS );
* // returns 1.0
*
* d = ulpdiff( 1.0+EPS, 1.0 );
* // returns 1.0
*
* d = ulpdiff( 1.0, 1.0+EPS+EPS );
* // returns 2.0
*
* d = ulpdiff( 1.0, NaN );
* // returns NaN
*
* d = ulpdiff( NaN, 1.0 );
* // returns NaN
*
* d = ulpdiff( NaN, NaN );
* // returns NaN
*/
function ulpdiff( x, y ) {
	var wx;
	var wy;

	if ( isnanf( x ) || isnanf( y ) ) {
		return NaN;
	}
	// Convert input values to unsigned 32-bit integers corresponding to the IEEE 754 binary representation of single-precision floating-point numbers:
	wx = toWordf( x );
	wy = toWordf( y );

	// Convert the words to lexicographically ordered integers:
	wx = monotoneKey( wx );
	wy = monotoneKey( wy );

	// Return a double as a result, which can exactly represent the ULP difference for all representable single-precision floating-point numbers:
	return abs( wx - wy );
}


// EXPORTS //

module.exports = ulpdiff;
