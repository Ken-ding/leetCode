/**
 * @param {string} s
 * @return {number}
 */
let s = "au";
var lengthOfLongestSubstring = function(s) {
    if(s==="")return 0;
    if(s.length===1)return 1;
    let L=new Set();
    outer:for (let i = 0; i < s.length; i++) {
        let set=new Set();
        set.add(s[i]);
        inner:for (let j = i+1; j < s.length; j++) {
            if(set.has(s[j]))break
            set.add(s[j])
        }
        L.add(set.size);
    }
    return Math.max(...L)
};;

lengthOfLongestSubstring(s)