/**
 * Created by zhoubowen on 2018/3/30.
 */
/**
 NO1-two sum
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 You may assume that each input would have exactly one solution.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,
 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 */

///////////////
// Solution one
///////////////
let twoSum = function(arr, target) {
  let [hash, len, result] = [{}, arr.length, []];
  arr.forEach((val, i) => {
    // if (val in hash) {
    if (hash.hasOwnProperty(val)) {
      result.push(hash[val]);
      result.push(i);
      // return [hash[val], i]; 在里面return是错的！！！！
    }
    hash[target - val] = i;
  })
  return result;
};
let [arr, target] = [[2, 11, 7, 15], 9];
console.log(twoSum(arr,target)); // [0, 2]



///////////////
// Solution 2
///////////////
// 交换
let swap = function(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//快速排序
let Partition = function(arr, first, end) { // 如果提取出来会传递一个arr数组，本例是直接调用全局的arr数组
  let i = first - 1, // arr下标是（first-1, end-1）
    j = end - 1;
  while (i < j) {
    while (i < j && arr[i] <= arr[j]) { j--; }
    if (i < j) {
      swap(i, j, arr); // 交换
      i++;
    }
    while(i < j && arr[i] <= arr[j]) { i++; }
    if (i < j) {
      swap(i, j, arr);
      j--;
    }
  }
  return i+1;
};

let QuickSort = function(arr, first, end) {// 如果提取出来会传递一个arr数组，本例是直接调用全局的arr数组
  if (first < end) {
    let pivot = Partition(arr, first, end);
    QuickSort(arr, first,pivot - 1); // 前半部分
    QuickSort(arr, pivot + 1, end); // 后半部分
  }
  return arr;
};

// 因为前面已经排过序，所以数组顺序已经变化
let findNum = function(arr, target) {
  let left = 0,
    right = arr.length-1;
  while (left <= right) {
//    let middle = Math.floor((left + right) / 2);
    if (arr[left] + arr[right] > target) {
      right -= 1;
    }else if (arr[left] + arr[right] < target) {
      left += 1;
    }else {
      return [arr[left], arr[right]]; // 找到是哪两个值，然后输出
    }
  }
};
let twoSum2 = function(arr, target) {
  let arrOrigin = [...arr];
  let first = 1,
    end = arr.length;
  let newArr = QuickSort(arr, first, end);
  let res = findNum(newArr, target);
  // 得到num1 + num2 = target，就在原数组中找到这两个值的位置
  let indexOne = arrOrigin.indexOf(res[0]);
  let indexTwo = arrOrigin.indexOf(res[1]);
  /*
   防止类似输入[3,3] 6
   错误输出：[0,0]
   正确输出：[0,1]
   所以添加以下判断条件
   */
  if (indexTwo === indexOne) {
    arrOrigin[indexOne] = null;
    indexTwo = arrOrigin.indexOf(res[1]);
  }
  console.log(arr); // arr已经变成排序后的数组了
  return [indexOne, indexTwo];
};

let [arr1, target] = [[2, 11, 7, 15], 9];
console.log(twoSum2(arr1, target)); // 由于排序后，之前的次序就没有了，所以这里就设置返回哪两个值相加等于target

