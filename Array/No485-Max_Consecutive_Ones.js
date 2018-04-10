/**
 * Created by zhoubowen on 2018/4/10.
 *
 * No 485. Max Consecutive Ones
 */
let arr = [1,1,0,1,1,1];
let findMaxconsecutiveOnes = function(arr) {
  let max = 0,
    count = 0;
  arr.forEach((elem, i) => {
    if (elem === 1) {
      count += 1;
    }else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  });
  // 单独判断以下最后一个结果的情况
  max = count > max ? count:max;
  return max;
};
console.log(findMaxconsecutiveOnes(arr));