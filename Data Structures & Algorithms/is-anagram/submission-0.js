class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let n = s.length;
        let m = t.length;
        if( m!=n) return false;
        let sorted = s.split("").sort()
        let torted = t.split("").sort()
        const filtered= sorted.filter((c, idx)=>{
           return torted[idx]!==c;
        })
        return filtered.length<1;
    }
}
