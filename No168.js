/**
 * Created by zhoubowen on 2018/4/5.
 */
//	console.log('Z'.charCodeAt());
//	console.log('A'.charCodeAt());
let titleToNumber = function(n) {
  let codeA = 'A'.charCodeAt() - 1; // 64
  let res = '';
  while (n > 0) {
    if (n % 26 === 0) { // n为26的倍数，该位置的字符应该是'Z'，不作处理就变成'@'
      res = String.fromCharCode(n % 26 + 26 + codeA) + res; // 为了显示Z，直接加26
      n = Math.floor(n / 26 - 1);
    }else {
      res = String.fromCharCode(n % 26 + codeA) + res; // 每次都从res的头部增加值（算法是从后往前的顺序）
      n = Math.floor(n / 26);
    }
  }
  return res;
};
//	console.log(titleToNumber(1));
//	console.log(titleToNumber(28));
console.log(titleToNumber(26));
//	console.log(titleToNumber(25));
//	console.log(titleToNumber(24));
//	console.log(titleToNumber(1));
//	console.log(titleToNumber(0));
//	console.log(titleToNumber(703));



/**
 *	由于上面while循环内的if判断是针对'Z'这个特殊情况的处理，我们可以用另一种方式去处理
 *
 *（奇怪在于，在leetcode上run，上面的方法竟然比下面的方法好？？？）
 *
 */
let titleToNumber2 = function(n) {
  let codeA = 'A'.charCodeAt(); // 此处直接用'A'的asc码
  let res = '';
  while (n > 0) {
    n--; // 整体减1
    res = String.fromCharCode(n % 26 + codeA) + res;
    n = Math.floor(n / 26);
  }
  return res;
};
//	console.log(titleToNumber(1));
//	console.log(titleToNumber(28));
console.log(titleToNumber(26));

