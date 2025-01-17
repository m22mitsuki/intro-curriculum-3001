'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
	for (let i = 1; i <= n; i++){
		result = result * i;
	}
    return result;
}
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(4), 24, `4の階乗は24ですが、実際は${factorial(4) }でした`);
assert.equal(factorial(5), 120, `5の階乗は120ですが、実際は${factorial(5) }でした`);
assert.equal(factorial(6), 720, `6の階乗は720ですが、実際は${factorial(6) }でした`);
assert.equal(factorial(7), 5040, `7の階乗は5040ですが、実際は${factorial(7) }でした`);
assert.equal(factorial(8), 40320, `8の階乗は40320ですが、実際は${factorial(8) }でした`);
assert.equal(factorial(9), 362880, `9の階乗は362880ですが、実際は${factorial(9) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');
