/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import Number = require( './../../ctor' );
import float32 = require( './../../float32' );
import float64 = require( './../../float64' );
import int32 = require( './../../int32' );
import uint8 = require( './../../uint8' );
import uint16 = require( './../../uint16' );
import uint32 = require( './../../uint32' );

/**
* Interface describing the `number` namespace.
*/
interface Namespace {
	/**
	* Returns a Number object.
	*
	* ## Notes
	*
	* -   This constructor should be used sparingly. Always prefer number primitives.
	*/
	Number: typeof Number;

	/**
	* Utilities for single-precision floating-point numbers.
	*/
	float32: typeof float32;

	/**
	* Utilities for double-precision floating-point numbers.
	*/
	float64: typeof float64;

	/**
	* Utilities for signed 32-bit integers.
	*/
	int32: typeof int32;

	/**
	* Utilities for unsigned 8-bit integers.
	*/
	uint8: typeof uint8;

	/**
	* Utilities for unsigned 16-bit integers.
	*/
	uint16: typeof uint16;

	/**
	* Utilities for unsigned 32-bit integers.
	*/
	uint32: typeof uint32;
}

/**
* Number.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
