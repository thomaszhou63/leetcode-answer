/**
 * Created by zhoubowen on 2018/4/4.
 */
/**
 * NO39--------    Combination Sum
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let combinationSum = function(candidates, target) {
  let res = [];
  candidates.sort(sorting);
  dfs(0, 0, []);
  return res;

  function dfs(sum, index, tmp){
    if(sum === target){
      res.push(tmp); // 每找到一个解，就添加进res数组
      return;
    }else if(sum > target){
      return; // 找不到解，就退出
    }
    let len = candidates.length;
    for(let i = index; i < len; i++){ // i=index可以保证可以重复取当前值
      let newTmp = [...tmp];
      newTmp.push(candidates[i]);
      dfs(sum + candidates[i], i, newTmp); // DFS
    }
  }
  function sorting(a, b){
    if(a > b){
      return 1;
    }else if(a < b){
      return -1;
    }else{
      return 0;
    }
  }
};

let arr2 = [2,3,6,4,7,5];
target = 7;
console.log(combinationSum(arr2, target));
