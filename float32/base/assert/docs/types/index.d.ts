/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import isSameValuef = require( './../../../../../float32/base/assert/is-same-value' );
import isSameValueZerof = require( './../../../../../float32/base/assert/is-same-value-zero' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if two single-precision floating-point numbers are the same value.
	*
	* ## Notes
	*
	* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns boolean indicating whether two single-precision floating-point numbers are the same value
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValuef( toFloat32( 3.14 ), toFloat32( 3.14 ) );
	* // returns true
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValuef( toFloat32( -0.0 ), toFloat32( -0.0 ) );
	* // returns true
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValuef( toFloat32( -0.0 ), toFloat32( 0.0 ) );
	* // returns false
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValuef( toFloat32( NaN ), toFloat32( NaN ) );
	* // returns true
	*/
	isSameValuef: typeof isSameValuef;

	/**
	* Tests if two single-precision floating-point numbers are the same value.
	*
	* ## Notes
	*
	* -   The function differs from the `===` operator in that the function treats `NaNs` as the same value.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns boolean indicating whether two single-precision floating-point numbers are the same value
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValueZerof( toFloat32( 3.14 ), toFloat32( 3.14 ) );
	* // returns true
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValueZerof( toFloat32( -0.0 ), toFloat32( -0.0 ) );
	* // returns true
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValueZerof( toFloat32( -0.0 ), toFloat32( 0.0 ) );
	* // returns true
	*
	* @example
	* var toFloat32 = require( './../../../../../float64/base/to-float32' );
	*
	* var bool = ns.isSameValueZerof( toFloat32( NaN ), toFloat32( NaN ) );
	* // returns true
	*/
	isSameValueZerof: typeof isSameValueZerof;
}

/**
* Base double-precision floating-point number assert functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
