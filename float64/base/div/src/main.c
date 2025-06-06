/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/number/float64/base/div.h"

/**
* Divides two double-precision floating-point numbers.
*
* @param x       first number (dividend)
* @param y       second number (divisor)
* @return        result
*
* @example
* double z = stdlib_base_float64_div( -3.0, 5.0 );
* // returns -0.6
*/
double stdlib_base_float64_div( const double x, const double y ) {
	return x / y;
}
