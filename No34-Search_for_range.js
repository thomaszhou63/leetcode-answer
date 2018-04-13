/**
 * Created by zhoubowen on 2018/4/12.
 */
// 其实二分法有个奇妙的地方就在于，如
  // 		1、如果我们先判断star,再判断end,最后得到的结果就是要找的target的最左边的值
  //		2、如果我们先判断end,再判断star,最后得到的结果就是要找的target的最右边的值
let arr1 = [1,1,2,2,3,4,4,7,8];
let arr = [5,7,7,8,8,10],
  target = 8;
let searchRange = function(arr, target) {
  let len = arr.length,
    res = [-1, -1];
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < target) {
      i = mid + 1;
    }else {
      j = mid - 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[0] = mid; // 得到最左边的值
      }
    }
  }

  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] > target) {
      j = mid - 1;
    }else {
      i = mid + 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[1] = mid; // 得到最左边的值
      }
    }
  }

  return res;
};
console.log(searchRange(arr,target)); // [3, 4]


/**
 * 方法2
 *
 * 找到res[0]之后，就向右遍历，直到不是该值，就可以得到右边界了
 * 没上面的方法好
 */

let searchRange1 = function(arr, target) {
  let len = arr.length,
    res = [-1, -1];
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < target) {
      i = mid + 1;
    }else {
      j = mid - 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[0] = mid; // 得到最左边的值
      }
    }
  }
  let k;
  res[1] = res[0];
  for (k = res[0] + 1; k < len; k++) { // 找到右边界
    if (arr[k] === target) {
      res[1] += 1;
    }
  }

  return res;
};
console.log(searchRange1([1],1)); // [0, 0]
console.log(searchRange1([2,2],2)); // [0, 1]
console.log(searchRange1([5,7,7,8,8,10],8)); // [3, 4]
console.log(searchRange1([1,3],1)); // [0, 0]
console.log(searchRange1([3,3,3],3)); // [0, 0]