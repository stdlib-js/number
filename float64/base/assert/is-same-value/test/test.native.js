/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isSameValue = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isSameValue instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two double-precision floating-point numbers which are the same value', opts, function test( t ) {
	var values;
	var i;

	values = [
		5.0,
		3.14,
		-3.14,
		0.0,
		-0.0,
		NaN
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isSameValue( values[ i ], values[ i ] ), true, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided two double-precision floating-point numbers which are the same value', opts, function test( t ) {
	var a;
	var b;
	var i;

	a = [
		5.0,
		3.14,
		-3.14,
		0.0,
		-0.0
	];
	b = [
		-5.0,
		-3.14,
		3.14,
		-0.0,
		0.0
	];
	for ( i = 0; i < a.length; i++ ) {
		t.strictEqual( isSameValue( a[ i ], b[ i ] ), false, 'returns expected value when provided '+a[ i ]+' and '+b[ i ] );
	}
	t.end();
});
