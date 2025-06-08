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

#include "stdlib/number/uint32/base/mul.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	const uint32_t x[] = { 3, 5, 10, 12 };
	const uint32_t y[] = { 6, 2, 11, 24 };

	uint32_t z;
	int i;
	for ( i = 0; i < 4; i++ ) {
		z = stdlib_base_uint32_mul( x[ i ], y[ i ] );
		printf( "%u * %u = %u\n", x[ i ], y[ i ], z );
	}
}
