/**
 * Created by zhoubowen on 2018/4/4.
 *
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has
 *
 *
 *
 */
let a = 11;
let hammingWeight = function(n) {
  let res = 0;
  for (let i = n; i !== 0;) {
    if (i % 2 === 1) {
      res += 1;
    }
    i = Math.floor(i / 2);
  }
  return res;
}
console.log(hammingWeight(a));
