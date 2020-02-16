const perf = require('execution-time')();
const s = 'dvdf';
perf.start();

const lengthOfLongestSubstring = (s) => {
    let n = s.length, ans = 0;
    let index = new Array(26);
    for(let j=0,i=0;j<n;j++) {
        if(index[s.charAt(j)]){
            i = Math.max(index[s.charAt(j)], i);
        }
        ans = Math.max(ans, j-i+1);
        index[s.charAt(j)] = j+1;
    }
    return ans;
}

console.log(lengthOfLongestSubstring(s));
const results = perf.stop();
console.log(results.time)