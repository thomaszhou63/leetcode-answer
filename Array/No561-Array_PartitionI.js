/**
 * Created by zhoubowen on 2018/4/7.
 */

/** No 561
 * Array Partition
 */
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


// main
let arr = [1,4,3,2];
var arrayPariSum = function(arr) {
  let first = 1,
    end = arr.length;
  arr = QuickSort(arr, first, end);
//    arr = arr.sort();
  let len = arr.length,
    sum = 0;
  for (let i = 0; i < len; i += 2) {
    sum += arr[i];
  }
  return sum;
};
console.log(arrayPariSum(arr));
