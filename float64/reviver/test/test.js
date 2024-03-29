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

var tape = require( 'tape' );
var copy = require( '@stdlib/utils/copy' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var toJSON = require( './../../../float64/to-json' );
var reviver = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviver, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as numbers are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}', reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	// Null edge case:
	actual = parseJSON( 'null', reviver );
	t.strictEqual( actual, null, 'equals null' );

	t.end();
});

tape( 'an object must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Boop',
		'value': 'NaN'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'an object must have a recognized "value" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'float64'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'float64',
		'value': null
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function will revive a JSON-serialized number', function test( t ) {
	var json;
	var out;

	json = toJSON( PINF );
	out = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( out, PINF, 'has expected value' );

	json = toJSON( NINF );
	out = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( out, NINF, 'has expected value' );

	json = toJSON( NaN );
	out = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( out !== out, true, 'has expected value' );

	json = toJSON( 5 );
	out = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( out, 5, 'has expected value' );

	t.end();
});
