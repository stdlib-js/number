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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var toFloat32 = require( './../../../../float64/base/to-float32' );
var bits = require( './../../../../float32/base/to-binary-string' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var significand = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( significand instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof significand, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a number', opts, function test( t ) {
	t.equal( typeof significand( toFloat32( 3.14e30 ) ), 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns an integer corresponding to the significand of a single-precision floating-point number', opts, function test( t ) {
	var expected;
	var actual;
	var sign;
	var frac;
	var exp;
	var x;
	var b;
	var i;

	for ( i = 0; i < 5000; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		frac = randu() * 10.0;
		exp = round( randu()*44.0 ) - 22;
		x = sign * frac * pow( 10.0, exp );
		x = toFloat32( x );

		b = bits( x );
		expected = parseInt( b.substring( 9 ), 2 );

		actual = significand( x );
		t.equal( actual, expected, 'returns the significand for ' + x );
	}
	t.end();
});

tape( 'the function returns the significand for `+-0`', opts, function test( t ) {
	t.equal( significand( 0.0 ), 0, 'returns 0' );
	t.equal( significand( -0.0 ), 0, 'returns 0' );
	t.end();
});

tape( 'the function returns the significand for `+infinity`', opts, function test( t ) {
	t.equal( significand( PINF ), 0, 'returns 0' );
	t.end();
});

tape( 'the function returns the significand for `-infinity`', opts, function test( t ) {
	t.equal( significand( NINF ), 0, 'returns 0' );
	t.end();
});

tape( 'the function returns the significand for `NaN`', opts, function test( t ) {
	t.equal( significand( NaN ), 4194304, 'returns int corresponding to bit sequence 10000000000000000000000' );
	t.end();
});

tape( 'the function returns the significand for subnormals', opts, function test( t ) {
	var x = toFloat32( 3.14e-42 );
	var s = parseInt( bits( x ).substring( 9 ), 2 );
	t.equal( significand( x ), s, 'returns the significand for ' + x );
	t.end();
});
