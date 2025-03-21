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

#include "stdlib/number/float32/base/div.h"

/**
* Divides two single-precision floating-point numbers.
*
* @param x       first number (dividend)
* @param y       second number (divisor)
* @return        result
*
* @example
* float z = stdlib_base_float32_div( -3.0f, 5.0f );
* // returns -0.6f
*/
float stdlib_base_float32_div( const float x, const float y ) {
	return x / y;
}
