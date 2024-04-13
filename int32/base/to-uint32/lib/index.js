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

/**
* Convert a signed 32-bit integer to an unsigned 32-bit integer.
*
* @module @stdlib/number/int32/base/to-uint32
*
* @example
* var float64ToInt32 = require( '@stdlib/number/float64/base/to-int32' );
* var int32ToUint32 = require( '@stdlib/number/int32/base/to-uint32' );
*
* var y = int32ToUint32( float64ToInt32( -32 ) );
* // returns 4294967264
*
* y = int32ToUint32( float64ToInt32( 3 ) );
* // returns 3
*/

// MODULES //

var int32ToUint32 = require( './main.js' );


// EXPORTS //

module.exports = int32ToUint32;
