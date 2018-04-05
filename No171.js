/**
 * @param {string} s
 * @return {number}
 * 
 * key mind : 进制转换
 * tip1: A的ascII码是65
 * tip2: A～Z 长度为 26
 * tip3:
 * 		A : Math.pow(26, 0) * 1
 * 		AA : Math.pow(26, 1) * 1 + 1
 * 		AB : Math.pow(26, 1) * 1 + 2
 * 	  BA : Math.pow(26, 1) * 2 + 1
 * 	  AAA : Math.pow(26, 2) * 1 + Math.pow(26, 1) * 1 + 1
 */
str = 'A';
str1 = 'B';
//console.log(str.charCodeAt(0));
//console.log(str1.charCodeAt(0));
let titleToNumber = function(s) {
  s = s.toUpperCase();
  let len = s.length,
    res = 0;
  for (let i = len - 1, power = 0; i >= 0; i--, power++) {
    let temp = s[i].charCodeAt() - 64;
    res += temp * Math.pow(26, power);
  }
  return res;
};
console.log(titleToNumber('AA'));
