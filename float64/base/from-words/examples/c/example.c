/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/number/float64/base/from_words.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	uint32_t high = 1074339512;
	const uint32_t low[] = { 0, 10000, 1000000, 1374389535 };

	double x;
	int i;
	for ( i = 0; i < 4; i++ ) {
		stdlib_base_float64_from_words( high, low[ i ], &x );
		printf( "high: %u, low: %u => %lf\n", high, low[ i ], x );
	}
}
