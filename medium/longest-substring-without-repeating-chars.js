/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const perf = require('execution-time')();
const s = 'dvdf';
perf.start();

const lengthOfLongestSubstring = (s) => {
    if(s.length === 0) {
        return 0;
    }

    let longestCount = 1;
    let storeString = 'test';
    let myArr = [];
    
    for (let i = 0; i < s.length; i++) {
        myArr = [];
        storeString = s[i];
        let k =  i + 1;
        myArr.push(s[i]);
        for (let j = 0; j <  s.length - (i+1); j++) {
            if(s[k] !== s[i] && !myArr.includes(s[k], 0)) {
                storeString = storeString.concat(s[k]);
                myArr.push(s[k]);
                k++;
                if(storeString.length > longestCount) {
                    longestCount = storeString.length;   
                }
            }
            else {
                break;
            }
        }
    }
    return longestCount;
};

console.log(lengthOfLongestSubstring(s));
const results = perf.stop();
console.log(results.time)