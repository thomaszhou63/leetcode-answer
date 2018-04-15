># Leetcode解题-javascript(No442和No485)
[附上我的github仓库](https://github.com/thomaszhou63/leetcode-answer)，会不断更新leetcode解题答案，提供一个思路，大家共勉

### ```希望可以给star，鼓励继续更新解题思路```
>author: thomas

![](https://user-gold-cdn.xitu.io/2018/4/13/162bdfc6ee1b3769?w=960&h=316&f=png&s=55236)
# Leetcode之javascript解题(No442/No485)
>## ```No442. Find All Duplicates in an Array(```Medium```)```
## ```题目```
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```
>这道题给了我们一个数组，数组中的数字可能出现一次或两次，让我们找出所有出现两次的数字
## ```思路```
- 这类问题的一个重要条件就是```1 ≤ a[i] ≤ n (n = size of array)```，不然很难在O(1)空间和O(n)时间内完成。
- >##### 方法一：正负替换的方法
    - 这类问题的核心是就是找```nums[i]和nums[nums[i] - 1]```的关系，我们的做法是，**对于每个nums[i]，我们将其对应的nums[nums[i] - 1]取相反数（因为坐标是从0开始）**，**如果其已经是负数了，说明之前存在过**，我们将其加入结果res中即可
    - 当然我们每次取值的时候是取当前的绝对值来给对应的位置取负数```Math.abs(elem) - 1;```
- 方法二：遍历数组，用lastIndexOf方法，只要从后查找当前值的位置和当前不同，那就是我们取的值。```arr.lastIndexOf(elem) !== i)```
- >##### 方法三(最优解)：
    - 在```nums[nums[i]-1]```位置累加数组长度n，(注意nums[i]-1有可能越界)，所以我们需要对n取余，最后要找出现两次的数只需要看nums[i]的值是否大于2n即可，最后遍历完nums[i]数组为[12, 19, 18, 15, 8, 2, 11, 9]，我们发现有两个数字19和18大于2n，那么就可以通过i+1来得到正确的结果2和3了
## ```代码```

```
// 方法一
  let arr = [4,3,2,7,8,2,3,1];
  var findDuplicates = function(arr) {
		let res = [];
		arr.forEach((elem, i) => {
		  let temp = Math.abs(elem) - 1;
		  if (arr[temp] < 0) {
		    res.push(temp + 1); // 取的负值位置+1
			}
			arr[temp] = -arr[temp]
		})
		return res;
 };
 
 // 方法三
 var findDuplicates3 = function(arr) {
    let res = [],
		len = arr.length;
    for (let i = 0; i < len; ++i) {
      arr[(arr[i] - 1) % len] += len; // 对len取余，防止越界
    }
    for (let i = 0; i < len; ++i) {
      if (arr[i] > 2 * len) res.push(i + 1);
    }
    return res;
  };

 console.log(findDuplicates3(arr));
```

>## ```No485：Max Consecutive Ones(```Easy```)```

## ```题目```
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```
- Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
## ```思路```
这道题让我们求最大连续1的个数，不是一道难题。我们可以遍历一遍数组，用一个计数器cnt来统计1的个数，方法是如果当前数字为0，那么cnt重置为0，如果不是0，cnt自增1，然后每次更新结果res即可
## ```代码```
```
/**
 * Created by zhoubowen on 2018/4/10.
 *
 * No 485. Max Consecutive Ones
 */
let arr = [1,1,0,1,1,1];
let findMaxconsecutiveOnes = function(arr) {
  let max = 0,
    count = 0;
  arr.forEach((elem, i) => {
    if (elem === 1) {
      count += 1;
    }else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  });
  // 单独判断以下最后一个结果的情况
  max = count > max ? count:max;
  return max;
};
console.log(findMaxconsecutiveOnes(arr));
```
