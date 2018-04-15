[附上我的github仓库](https://github.com/thomaszhou63/leetcode-answer)，会不断更新leetcode解题答案，提供一个思路，大家共勉

### ```希望可以给star，鼓励继续更新解题思路```
>author: thomas

![](https://user-gold-cdn.xitu.io/2018/4/13/162bdfc6ee1b3769?w=960&h=316&f=png&s=55236)

># No561：Array Partition I(```Easy```)
## ```题目```
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

- Example 1:
```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```
- Note:

n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

>意思是：给一个2n长度的数组，两两为一组，然后取每组的最小值，最后对所有组的min值求和，问如何匹配保证这个求和的值最大
## ```思路```
就是给2n个数分组，两两一组，使用所有组中小的那个数加起来和最小。 

既然我们两两分组，并且只取最小的那个值，那两个值中较大的值就浪费了。为了使浪费最低，那就每个分组都保证大的那个值只比小的那个值大一点点（也就是最接近小的那个值）。

>先将所有数排序，然后就是以排序后的值从前往后每2个值为一组（这样就保证每个组中大的值最接近小的值），由于每个分组都是最小的值，所以我们取的值就是位置1，3，5...的值
## ```代码```
```
//
let arr = [1,4,3,2];
var arrayPariSum = function(arr) {
  let first = 1,
    end = arr.length;
  arr = QuickSort(arr, first, end); // 这是调用快排函数
  let len = arr.length,
    sum = 0;
  for (let i = 0; i < len; i += 2) { //只取1，3，5..位置的值相加
    sum += arr[i];
  }
  return sum;
};
console.log(arrayPariSum(arr));
```
># No566：Reshape the Matrix(```Easy```)
## ```题目```
题目：给一个二维数组和两个数字，返回一个二维数组，第一个数字代表返回的数组的行，第二个数字代表列。
```
Example 1:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
```
Example 2:
```
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
```
## ```思路```
- 刚开始想逻辑想不明白，可能是想循环一下搞定，但是不行，只能在循环外面创建两个变量来控制要返回的数组的接收：
- javascript在多维数组的创建上和其他语言不同，没有多维数组，所以只能自己不断地在内部创建新的数组（用到的时候，再创建）

## ```代码```
```
<script>
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
      res[tempr] = [];// 这里要先在数组res中创建一个新的数组
	  for (let i = 0; i < row; i++) {
	    for (let j = 0; j < col; j++) {
	      res[tempr][tempc] = arr[i][j];
	      if (tempc === c-1) { // 第一行满了
	        tempr += 1;
	        if (tempr < r) {
              res[tempr] = [];// 如果满足条件，在内部多创建一个空数组
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
```