/**
 * Created by zhoubowen on 2018/4/10.
 *
 * No695. Max Area of Island
 *
 * input:
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 *
 * output:
 *  6
 */

let arr1 = [
  [1,1,0,1,1],
  [1,0,0,0,0],
  [0,0,0,0,1],
  [1,1,0,1,1]
];
let maxAreaOfIsland = function(arr1) {
  let len1 = arr1.length,
    len2 = arr1[0].length,
    max = 0;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (arr1[i][j] === 1) {
        max = Math.max(max, dfs(i, j, arr1)); // 每次都与max进行比较，把最好的赋值给max
      }
    }
  }
  return max;
};

// dfs
function dfs(i, j, arr1) {
  let sum = 1;
  if (i < 0 || i >= arr1.length || j < 0 || j >= arr1[0].length || arr1[i][j] === 0) { // 防止边界溢出+搜索结束
    return 0;
  }
  arr1[i][j] = 0; // 查找完一个值，就将值赋值为0（剪枝）
  sum += dfs(i-1, j, arr1) + dfs(i+1, j, arr1) + dfs(i, j-1, arr1) + dfs(i, j+1, arr1);
  return sum;
}
//  maxAreaOfIsland(arr1);
console.log(maxAreaOfIsland(arr1));

