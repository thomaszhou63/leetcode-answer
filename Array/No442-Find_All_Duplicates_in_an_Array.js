/**
 * Created by zhoubowen on 2018/4/8.
 *
 *
 * 442. Find All Duplicates in an Array
 * 方法4
 */


let arr = [4,3,2,7,8,2,3,1];

/**
 * method 1
 */
var findDuplicates1 = function(arr) {
  let res = [];
  arr.forEach((elem, i) => {
    let temp = Math.abs(elem) - 1;
    if (arr[temp] < 0) {
      res.push(temp + 1);
    }
    arr[temp] = -arr[temp]
  })
  return res;
};

/**
 *  method 2 (bad)
 */
var findDuplicates2 = function(arr) {
  let res = [];
  arr.forEach((elem, i) => {
    if (arr.lastIndexOf(elem) !== i) {
      res.push(elem);
    }
  });
  return res;
};

/**
 *  method 3 (best)
 */
var findDuplicates3 = function(arr) {
  let res = [],
    len = arr.length;
  for (let i = 0; i < len; ++i) {
    arr[(arr[i] - 1) % len] += len;// // 对len取余，防止越界
  }
  for (let i = 0; i < len; ++i) {
    if (arr[i] > 2 * len) res.push(i + 1);
  }
  return res;
};

console.log(findDuplicates3(arr));
