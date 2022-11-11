/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Converts a double-precision floating-point number to a signed 32-bit integer.
*
* @param x - double-precision floating-point number
* @returns signed 32-bit integer
*
* @example
* var y = float64ToInt32( 4294967295.0 );
* // returns -1
*
* @example
* var y = float64ToInt32( 3.14 );
* // returns 3
*
* @example
* var y = float64ToInt32( -3.14 );
* // returns -3
*
* @example
* var y = float64ToInt32( NaN );
* // returns 0
*
* @example
* var y = float64ToInt32( Infinity );
* // returns 0
*
* @example
* var y = float64ToInt32( -Infinity );
* // returns 0
*/
declare function float64ToInt32( x: number ): number;


// EXPORTS //

export = float64ToInt32;
