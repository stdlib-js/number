/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var lpad = require( '@stdlib/string/left-pad' );
var repeat = require( '@stdlib/string/repeat' );
var pow = require( '@stdlib/math/base/special/pow' );
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
var Uint32Array = require( '@stdlib/array/uint32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var toWords = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( toWords instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof toWords, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function splits a floating-point number into a higher order word and a lower order word', opts, function test( t ) {
	var expected;
	var values;
	var high;
	var low;
	var str;
	var out;
	var v;
	var w;
	var i;

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
		8.0*pow( 2.0, 54 )
	];
	out = new Uint32Array( 2 );

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];

		w = toWords( out, v );
		t.equal( out, w, 'returns expected value' );

		// Convert to binary strings:
		high = w[ 0 ].toString( 2 );
		low = w[ 1 ].toString( 2 );

		// Combine into a single bit literal:
		if ( v > 0 ) {
			str = '0'; // sign bit
			str += lpad( high, 31, '0' );
		} else {
			str = lpad( high, 32, '0' );
		}
		str += lpad( low, 32, '0' );

		expected = toBinaryString( v );
		t.equal( str, expected, 'high+low equals bit string for ' + v );
	}
	t.end();
});

tape( 'if provided `NaN`, the sign bit may be either 0 or 1, the exponent must be all 1s, and the fraction cannot be all 0s (IEEE 754-1985)', opts, function test( t ) {
	var frac;
	var high;
	var low;
	var out;
	var w;

	out = new Uint32Array( 2 );
	w = toWords( out, NaN );

	// Convert to binary strings...
	high = w[ 0 ].toString( 2 );
	low = w[ 1 ].toString( 2 );

	// Pad...
	high = lpad( high, 32, '0' );
	low = lpad( low, 32, '0' );

	// Sign: +-1.
	t.ok( high[0] === '1' || high[0] === '0', 'sign is either 1 or 0' );

	// Exponent all 1s.
	t.equal( high.substring( 1, 12 ), '11111111111', 'exponent all 1s' );

	// Fraction cannot be all zeros.
	frac = repeat( '0', 52 );

	t.ok( high.substring( 12 ) !== frac.substring( 0, 32-12 ) || low !== frac.substring( 32-12 ), 'fraction not all 0s' );

	t.end();
});

tape( 'if provided `+infinity`, the higher order word corresponds to a sign of 0, all 1s in the exponent, and all 0s in the fraction, while the lower order word is all 0s (IEEE 754-1985)', opts, function test( t ) {
	var high;
	var low;
	var out;
	var w;

	high = '0'; // sign
	high += repeat( '1', 11 ); // exponent
	high += repeat( '0', 20 ); // fraction
	high = parseInt( high, 2 );

	low = repeat( '0', 32 );
	low = parseInt( low, 2 );

	out = new Uint32Array( 2 );
	w = toWords( out, PINF );
	t.equal( w[0], high, 'equals high word' );
	t.equal( w[1], low, 'equals low word' );
	t.end();
});

tape( 'if provided `-infinity`, the higher order word corresponds to a sign of 1, all 1s in the exponent, and all 0s in the fraction, while the lower order word is all 0s (IEEE 754-1985)', opts, function test( t ) {
	var high;
	var low;
	var out;
	var w;

	high = '1'; // sign
	high += repeat( '1', 11 ); // exponent
	high += repeat( '0', 20 ); // fraction
	high = parseInt( high, 2 );

	low = repeat( '0', 32 ); // fraction
	low = parseInt( low, 2 );

	out = new Uint32Array( 2 );
	w = toWords( out, NINF );
	t.equal( w[0], high, 'equals high word' );
	t.equal( w[1], low, 'equals low word' );
	t.end();
});
