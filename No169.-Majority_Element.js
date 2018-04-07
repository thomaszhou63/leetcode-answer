/**
 * Created by zhoubowen on 2018/4/7.
 */


let arr = [1,2,5,1,5,5,5,8,5,5];
let majorityElement = function(arr) {
  let candidate = null,
    count = 0;
  arr.forEach((elem, i) => {
    if (count === 0) {
      candidate = elem;
    }
    if (candidate === elem) {
      count += 1;
    }else {
      count -= 1;
    }
  })
  return candidate;
};
console.log(majorityElement(arr));
