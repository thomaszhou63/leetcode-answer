
># no695-max-area-of-island
### ```题目```
给定一个非空的二维阵列网格为0和1，一个岛是一组1（代表陆地）四方向（水平或垂直）。您可以假设网格的所有四个边缘被水包围。 在给定的2D数组中找到一个岛的最大面积。 （如果没有岛，最大面积为0.）
Example 1:
```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

output:6
```
Example2:
```
[[0,0,0,0,0,0,0,0]]

output: 0
```
### ```思路```
题目给了我们一个 2d grid array， 让我们找到所有岛中区域最大的一个，返回区域值。0代表海洋，1代表陆地。陆地与陆地相连，只能是横向和纵向，不可以斜着。

　　因为只能横向和纵向相连，所以每一个cell 只能是4个方向延伸，左 上 右 下。

　　这道题目要用到Depth-first Search，遍历2d array，遇到1的时候，就利用dfs把这个岛的区域大小找全。我的dps顺序是 左，上，右，下。在递归dfs之前，要把目前的cell

　　设为0，是为了避免dfs又往回走，每一个数过的cell，就不需要在重复走了。
### ```代码```
```
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

```

>#  no766-toeplitz_matrix
### ```题目```
matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

如果一个矩阵的每一条斜对角线（左上到右下）上的元素都相等，则我们称它为托普利兹矩阵。现在输入一个M*N大小的矩阵，如果它是一个托普利兹矩阵，则返回true，如果不是，返回false。
```
Example 1:
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1234
5123
9512
在上面的矩阵中, 矩阵的所有斜对角线为 "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", 每一个对角线上的元素都相等，因此返回true。
```
```
Example 2:
Input: matrix = [[1,2],[2,2]]
Output: False
Explanation:
斜对角线 "[1, 2]" 元素的值不等，返回false。
```
### ```思路```
基本想法就是遍历每一个元素，同时比较这个元素和它右下角元素的值是否相等，如果不相等，直接返回false，停止遍历
>改进
我们设置初始值为matrx[1][1]而不是为matrx[0][0]，然后依次向下遍历。每次都与左上角进行比较
### ```代码```
```
let matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
let isToeplitzMatrix = function(matrix) {
  let column = matrix.length,
    row = matrix[0].length;
  for (let i = 1; i < column; i++) {
    for (let j = 1; j < row; j++) {
      if (matrix[i-1][j-1] !== matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isToeplitzMatrix(matrix));
```