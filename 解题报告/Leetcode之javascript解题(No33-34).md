[附上我的github仓库](https://github.com/thomaszhou63/leetcode-answer)，会不断更新leetcode解题答案，提供一个思路，大家共勉

### ```希望可以给star，鼓励继续更新解题思路```
>author: thomas

![](https://user-gold-cdn.xitu.io/2018/4/13/162bdfc6ee1b3769?w=960&h=316&f=png&s=55236)
># No34：Search for Range(```Medium```)
## ```题目```
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example
```
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4]. // 下标3，4是数组8
```
这道题让我们在一个有序整数数组中寻找相同目标值的起始和结束位置,没如果没有找到就返回[-1,-1]
## ```思路```
这道题让我们在一个有序整数数组中寻找相同目标值的起始和结束位置，而且限定了```时间复杂度为O(logn)，这是典型的二分查找法的时间复杂度```，所以这道题我们也需要用此方法。
- >**方法一**：
    - 我们的思路是对原数组使用两次二分查找法，分别找出一个起始和结束位置
- **方法二**：利用二分法找到起始位置，然后向右遍历，找到边界

## ```代码```
- 方法一
```
let arr1 = [1,1,2,2,3,4,4,7,8];
let arr = [5,7,7,8,8,10],
  target = 8;
let searchRange = function(arr, target) {
  let len = arr.length,
    res = [-1, -1];
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < target) { // 先判断小于target的情况
      i = mid + 1;
    }else {
      j = mid - 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[0] = mid; // 得到起始index
      }
    }
  }

  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] > target) {// 先判断大于target的情况
      j = mid - 1;
    }else {
      i = mid + 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[1] = mid; // 得到结束index
      }
    }
  }

  return res;
};
console.log(searchRange(arr,target)); // [3, 4]
```
- 方法二
```
/**
 * 方法2
 *
 * 找到res[0]之后，就向右遍历，直到不是该值，就可以得到右边界了
 * 时间复杂度没上面的方法好
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
```
>**注：二分法**：其假设我们找到目标值（但是有多个目标值连在一起）
- 1、如果我们```先判断arr[mid] < target(先判断小于target的情况)```,再判断剩下的,最后得到的结果就是要找的多个目标值target的最左边的值
- 2、如果我们```先判断arr[mid] > target(也就是先判断大于target的情况)```,再判断剩下的,最后得到的结果就是要找的多个目标值target的最右边的值
>#  No35：Search Insert Position(```Easy```)
## ```题目```
从给定排好顺序的数组，找出给定目标数字下标，存在则返回下标，不存在则返回目标数应该插入的位置下标。 
Example 1:
```
Input: [1,3,5,6], 5
Output: 2
```
Example 2:
```
Input: [1,3,5,6], 2
Output: 1
```
Example 3:
```
Input: [1,3,5,6], 7
Output: 4
```
Example 4:
```
Input: [1,3,5,6], 0
Output: 0
```
## ```思路```
思路就是每次取中间，如果等于目标即返回，否则根据大小关系切去一半。因此算法复杂度是O(logn)，空间复杂度O(1)
## ```代码```
```
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
console.log(searchInset([1,3,5,6],2)); // 2
```
>**注意:二分法**有一个好处:就是当循环结束时:
>
>(1)如果找到目标元素，那么就返回当前位置
>
>(2)如果没有找到目标元素，**那么i一定停在恰好比目标大的index上，j一定停在恰好比目标小的index上**，所以个人比较推荐这种实现方式。(初始i在左，j在右)
