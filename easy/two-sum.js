/* 
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const perf = require('execution-time')();

perf.start();
const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[y] == target - nums[x]) {
                return [x, y];
            }
        }
    }
};

console.log(twoSum(nums, target));
const results = perf.stop();
console.log(results.time);