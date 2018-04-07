/**
 * Created by zhoubowen on 2018/4/7.
 */

// js和其他语言不同之处在于没有多维数组，所以只能自己构造出来
//   也就是，需要的时候再创建子数组

let arr = [[1,2],[3,4],[5,6]];
let r = 2, c = 3;
let matrixReshape = function(arr, r, c) {
  if (arr === null) {
    return false;
  }
  if (arr.length * arr[0].length !== r * c) {
    return arr;
  }
  let [tempr, tempc,row, col] = [0, 0, arr.length, arr[0].length],
    res = [];
    res[tempr] = []; // 这里要先在数组res中创建一个新的数组
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res[tempr][tempc] = arr[i][j];
      if (tempc === c-1) {
        tempr += 1;
        if (tempr < r) {
          res[tempr] = []; // 要多创建一个空数组
        }
        tempc = 0;
        continue;
      }
      tempc += 1;
    }
  }
  return res;
}
console.log(matrixReshape(arr, r, c))
