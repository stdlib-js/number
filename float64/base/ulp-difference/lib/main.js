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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var SIGN_MASK = require( '@stdlib/constants/float64/high-word-sign-mask' );
var toWords = require( './../../../../float64/base/to-words' ).assign;
var Uint32Array = require( '@stdlib/array/uint32' );


// VARIABLES //

var WX = new Uint32Array( 2 ); // WARNING: not thread safe
var WY = new Uint32Array( 2 );
var WZ = new Uint32Array( 2 );

// 2^32:
var TWO_32 = 4294967296;


// FUNCTIONS //

/**
* Converts the high and low words of a double-precision floating-point number to a lexicographically ordered integer.
*
* ## Notes
*
* -   This function mutates the input array.
*
* @private
* @param {Array<integer>} words - high and low words
* @returns {Array<integer>} input array
*/
function monotoneKey( words ) {
	if ( words[ 0 ]&SIGN_MASK ) { // x < 0
		words = negate( words ); // maps -∞ to 0
	} else { // x >= 0
		words[ 0 ] |= SIGN_MASK; // push +0 to just above -0
	}
	return words;
}

/**
* Perform two's-complement negation.
*
* ## Notes
*
* -   This function mutates the input array.
*
* @private
* @param {Array<integer>} words - high and low words
* @returns {Array<integer>} input array
*/
function negate( words ) {
	words[ 0 ] = ~words[ 0 ];
	words[ 1 ] = ~words[ 1 ];
	words[ 1 ] += 1;

	// Handle the carry into the high word...
	if ( words[ 1 ] === 0 ) {
		words[ 0 ] += 1;
	}
	return words;
}

/**
* Returns the ordering of two double-precision floating-point numbers according to their lexicographically ordered high and low words.
*
* @private
* @param {Array<integer>} wa - high and low words for first value
* @param {Array<integer>} wb - high and low words for second value
* @returns {integer} relative ordering
*/
function compare( wa, wb ) {
	if ( wa[ 0 ] > wb[ 0 ] ) {
		return 1;
	}
	if ( wa[ 0 ] < wb[ 0 ] ) {
		return -1;
	}
	if ( wa[ 1 ] > wb[ 1 ] ) {
		return 1;
	}
	if ( wa[ 1 ] < wb[ 1 ] ) {
		return -1;
	}
	return 0;
}

/**
* Performs double-word subtraction.
*
* @private
* @param {Array<integer>} wa - high and low words for first value
* @param {Array<integer>} wb - high and low words for second value
* @param {Array<integer>} wc - output array
* @returns {Array<integer>} output array
*/
function subtract( wa, wb, wc ) {
	var ha;
	var hb;
	var la;
	var lb;

	ha = wa[ 0 ];
	la = wa[ 1 ];
	hb = wb[ 0 ];
	lb = wb[ 1 ];

	if ( la >= lb ) {
		wc[ 0 ] = ha - hb;
		wc[ 1 ] = la - lb;
	} else {
		wc[ 0 ] = ( ha - hb - 1 );      // wrap
		wc[ 1 ] = ( la + TWO_32 ) - lb; // borrow
	}
	return wc;
}


// MAIN //

/**
* Computes the number of representable double-precision floating-point values that separate two double-precision floating-point numbers along the real number line.
*
* ## Notes
*
* -   Adjacent double-precision floating-point numbers differ by 1 ulp (unit in the last place).
* -   Signed zeros differ only in the sign bit but are considered numerically equal, and thus their ULP difference is 0.
*
* @param {number} x - first value
* @param {number} y - second value
* @returns {number} result
*
* @example
* var EPS = require( '@stdlib/constants/float64/eps' );
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
	var ord;
	var wx;
	var wy;
	var wz;
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	// Convert input values to high and low words:
	wx = toWords( x, WX, 1, 0 );
	wy = toWords( y, WY, 1, 0 );

	// Convert the values to lexicographically ordered integers:
	wx = monotoneKey( wx );
	wy = monotoneKey( wy );

	// Determine the relative ordering of the two values so that we always subtract the smaller value from the larger value and ensure that the result is always >= 0:
	ord = compare( wx, wy );

	// Perform subtraction...
	if ( ord === 0 ) {
		// Identical encoding:
		return 0;
	}
	if ( ord === 1 ) {
		wz = subtract( wx, wy, WZ );
	} else { // ord === -1
		wz = subtract( wy, wx, WZ );
	}
	// Return a double as a result, which is fine for ≤2^53 ulps:
	return ( wz[ 0 ]*TWO_32 ) + wz[ 1 ];
}


// EXPORTS //

module.exports = ulpdiff;
