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

// MODULES //

var tape = require( 'tape' );
var semver = require( 'semver' );
var IS_NODE = require( '@stdlib/assert/is-node' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var VERSION = require( '@stdlib/process/node-version' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var lpad = require( '@stdlib/string/left-pad' );
var pow = require( '@stdlib/math/base/special/pow' );
var toBinaryString = require( './../../../../float64/base/to-binary-string' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var setHighWord = require( './../lib' );


// VARIABLES //

var DISTINGUISHABLE_NANS_POSSIBLE = ( // eslint-disable-line id-length
	IS_NODE &&
	IS_WINDOWS &&
	VERSION &&
	semver.lt( VERSION, '0.11.0' )
);


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof setHighWord, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a number', function test( t ) {
	var y = setHighWord( pow( 2.0, 53 ), 5 );
	t.equal( typeof y, 'number', 'returns a number' );
	t.end();
});

tape( 'the function sets the higher order word of a double-precision floating-point number', function test( t ) {
	var actual;
	var values;
	var high;
	var low;
	var x;
	var v;
	var y;
	var i;
	var j;

	values = [
		5.0,
		pow( 2.0, 53 ),
		1.0e308,
		-1.0e308,
		-3.14,
		1.0e-324,
		4.94e-324,
		1.234567890123456789,
		-4.94e-324,
		6.333333333333333333e-310,
		-0.0,
		0.0,
		100.0,
		1.0/10.0,
		0.625,
		1.0/3.0,
		5.0e-240,
		-5.0e-240,
		10.0,
		15.0,
		-10.0,
		-15.0,
		pow( 2.0, -42 ),
		-pow( 2.0, 100 ),
		1.0,
		-1.0,
		1.5,
		1111111111111.111111111,
		-1111111111111.111111111,
		pow( 2.0, 54 ),
		pow( 2.0, 53 ) + 1.0,
		pow( 2.0, 53 ) + 2.0,
		pow( 2.0, 55 ),
		pow( 2.0, 56 ) - 1.0,
		-pow( 2.0, 57 ) + 5.0,
		3.0*pow( 2.0, 53 ),
		8.0*pow( 2.0, 54 ),
		PINF,
		NINF,
		NaN
	];

	// For each value, replace the higher order bits with random integers and test that the returned values match expectations...
	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		x = toBinaryString( v );
		low = x.substring( 32 );
		for ( j = 0; j < 10; j++ ) {
			// Generate a random higher order word:
			high = round( randu()*MAX_UINT32 );

			// Generate a new double:
			y = setHighWord( v, high );

			// Convert to a binary string:
			high = high.toString( 2 );
			high = lpad( high, 32, '0' );

			/*
			* Check for NaN.
			*
			* Note: on certain Windows systems for Node <=v0.10.x, distinguishable NaNs are possible. On these systems, the standard `y !== y` check fails to return `true` and we have to check if a number is `NaN`-like; i.e., the value is a `number` and yet serializes as `NaN`.
			*/
			if (
				isnan( y ) ||
				(
					DISTINGUISHABLE_NANS_POSSIBLE &&
					isNumber( y ) &&
					y === y &&
					y.toString() === 'NaN'
				)

			) {
				high = high.substring( 1, 12 );
				t.equal( high, '11111111111', 'generated NaN => exponent all 1s' );
			}
			else {
				// Higher order bits:
				actual = toBinaryString( y ).substring( 0, 32 );
				t.equal( actual, high, 'returned double contains expected higher order word. v: ' + v + '. y: ' + y + '. high: ' + high + '.' );

				// Lower order bits:
				actual = toBinaryString( y ).substring( 32 );
				t.equal( actual, low, 'returned double contains expected lower order word. v: ' + v + '.' );
			}
		}
	}
	t.end();
});
