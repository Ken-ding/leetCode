/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 let s1 = "a",s2 = "eidbaooo"
 var checkInclusion = function(s1, s2) {
    let n=s1.length-1;
    for (let i=0;i<s2.length;i++) {
        let temp=s2[i];
        let j=i+1;
        if(n===0){
            if(s1===s2[i])return true
            continue
        }
        while (j<s2.length) {
            n--;
            temp+=s2[j]
            if(n<=0){
                n=s1.length-1
                if(temp===s1)return true
                temp=s2[i]
            }
            j++;
        }
    }

    return false;
};

checkInclusion(s1,s2)