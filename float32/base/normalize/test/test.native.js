/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var pow = require( '@stdlib/math/base/special/pow' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isnan = require( '@stdlib/math/base/assert/is-nanf' );
var FLOAT32_SMALLEST_NORMAL = require( '@stdlib/constants/float32/smallest-normal' );
var FLOAT32_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' ); // eslint-disable-line id-length
var toFloat32 = require( './../../../../float64/base/to-float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var normalize = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( normalize instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof normalize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a denormalized number, returning a normal number and an exponent', opts, function test( t ) {
	var frac;
	var exp;
	var x1;
	var x;
	var v;
	var i;

	// Smallest denormalized number:
	v = normalize( FLOAT32_SMALLEST_SUBNORMAL );
	t.ok( v[ 0 ] >= FLOAT32_SMALLEST_NORMAL, 'returns a normal number' );
	t.equal( v[ 0 ]*pow( 2.0, v[ 1 ] ), FLOAT32_SMALLEST_SUBNORMAL, 'x = y * 2^exp' );

	// Other subnormals...
	for ( i = 0; i < 1000; i++ ) {
		frac = 0.26 + (randu()*10.0); // 0.26 prevents underflow
		exp = -38 - round( randu()*6.0 );
		x = frac * pow( 10.0, exp );
		x = toFloat32( x );

		v = normalize( x );
		t.ok( v[ 0 ] >= FLOAT32_SMALLEST_NORMAL, 'returns a normal number ' + v[0] );

		x1 = v[ 0 ] * pow( 2.0, v[ 1 ] );
		x1 = toFloat32( x1 );
		t.equal( x1, x, 'y*2^exp=x. y='+v[0]+', exp='+v[1]+', x='+x );
	}
	t.end();
});

tape( 'the function returns `[0,0]` if provided a `0`', opts, function test( t ) {
	var val = normalize( 0.0 );
	t.deepEqual( val, [0.0, 0], 'returns [0,0]' );
	t.end();
});

tape( 'the function returns `[+inf,0]` if provided a `+infinity`', opts, function test( t ) {
	var val = normalize( PINF );
	t.deepEqual( val, [PINF, 0], 'returns [+inf,0]' );
	t.end();
});

tape( 'the function returns `[-inf,0]` if provided a `-infinity`', opts, function test( t ) {
	var val = normalize( NINF );
	t.deepEqual( val, [NINF, 0], 'returns [-inf,0]' );
	t.end();
});

tape( 'the function returns `[NaN,0]` if provided a `NaN`', opts, function test( t ) {
	var val = normalize( NaN );
	t.equal( isnan( val[0] ), true, 'first element is NaN' );
	t.equal( val[1], 0, 'second element is 0' );
	t.end();
});
