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

var bench = require( '@stdlib/bench' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var number2json = require( './../../../float64/to-json' );
var pkg = require( './../package.json' ).name;
var reviver = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values = [ '{"type":"float64","value":"NaN"}', '{"type":"float64","value":"Infinity"}', '{"type":"float64","value":"-Infinity"}'];
	var o;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = parseJSON( values[ i%values.length ], reviver );
		if ( o instanceof Error ) {
			b.fail( 'should not return an error' );
		}
	}
	b.toc();

	if ( o instanceof Error ) {
		b.fail( 'should not return an error' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::number', function benchmark( b ) {
	var str;
	var o;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = JSON.stringify( number2json( 3.14 ) );
		o = parseJSON( str, reviver );
		if ( o instanceof Error ) {
			b.fail( 'should not return an error' );
		}
	}
	b.toc();

	if ( o instanceof Error ) {
		b.fail( 'should not return an error' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
