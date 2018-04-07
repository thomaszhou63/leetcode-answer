/**
 * Created by zhoubowen on 2018/4/7.
 */
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
