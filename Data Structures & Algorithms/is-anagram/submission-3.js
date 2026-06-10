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
        // let sorted = s.split("").sort()
        // let torted = t.split("").sort()
        // const filtered= sorted.filter((c, idx)=>{
        //    return torted[idx]!==c;
        // })
        // return filtered.length<1;
        const tCount = {}
        const sCount = Array.from(s).reduce((acc, curr, idx) => {
            acc[curr] = (acc[curr] || 0) + 1
            tCount[t[idx]] = (tCount[t[idx]] || 0) + 1
            return acc
        }, {})

        if(Object.keys(sCount).length !== Object.keys(tCount).length) return false

        for (let key in sCount) {
            if (sCount[key] !== tCount[key]) {
                return false
            }
        }

        return true

    }
}
