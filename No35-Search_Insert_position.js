/**
 * Created by zhoubowen on 2018/4/13.
 */


/**
 * 注意以上实现方式有一个好处，就是当循环结束时，如果没有找到目标元素，
 * 那么l一定停在恰好比目标大的index上，r一定停在恰好比目标小的index上，所以个人比较推荐这种实现方式。
 * @type {[*]}
 */
let arr = [1,3,5,6],
  target = 5;

let searchInset = function(arr, target) {
  let len = arr.length,
    res = 0;
  for (let i = 0, j = len -1; i <= j;) {
    let mid = Math.floor((i+j)/2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      i = mid + 1;
      res = mid+1; // 更新res
    }else {
      j = mid - 1;
    }
  }
  return res; //
}
console.log(searchInset(arr,target)); // 2
console.log(searchInset([1,3,5,6],2)); // 1