/**
 * Created by zhoubowen on 2018/4/8.
 *
 *
 * 442. Find All Duplicates in an Array
 * 方法4
 */

let arr = [4,3,2,7,8,2,3,1];
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

var findDuplicates2 = function(arr) {
  let res = [];
  arr.forEach((elem, i) => {
    if (arr.lastIndexOf(elem) !== i) {
      res.push(elem);
    }
  })
  return res;
}
console.log(findDuplicates(arr));
