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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var data = require( './fixtures/c/data.json' );


// FIXTURES //

var mul = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mul instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two unsigned 32-bit integers', opts, function test( t ) {
	var expected;
	var actual;
	var a;
	var b;
	var i;

	a = data.a;
	b = data.b;
	expected = data.expected;
	for ( i = 0; i < expected.length; i++ ) {
		actual = mul( a[ i ], b[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value. a: '+a[i]+'. b: '+b[i]+'. expected: '+expected[i]+'. actual: '+actual+'.' );
	}
	t.end();
});
