/**
 * Created by zhoubowen on 2018/4/7.
 */




/**
 * 方法一：
 *    直接排序，然后中间的那个值就是结果（排序用快排）
 */


/**
 * 方法二：
 *    使用一个hash表，对数组进行一趟扫描统计每个元素出现的次数，即可得到多数元素。时间复杂度O(n)，空间复杂度O(n)。
 */



/**
 * 最佳方法
 * @type {[*]}
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
