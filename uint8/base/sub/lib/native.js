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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Subtracts two unsigned 8-bit integers `x` and `y`.
*
* @private
* @param {integer} x - first input value
* @param {integer} y - second input value
* @returns {integer} result
*
* @example
* var v = sub( 5, 1 );
* // returns 4
*
* @example
* var v = sub( 5, 2 );
* // returns 3
*
* @example
* var v = sub( 5, 0 );
* // returns 5
*/
function sub( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = sub;
