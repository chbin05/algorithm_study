function twoStrings(s1, s2) {
    const s1CountMap = {};
    for (let i = 0; i < s1.length; i++) {
        const c = s1[i];
        s1CountMap[c] = (s1CountMap[c] || 0) + 1;
    }
    for (let i = 0; i < s2.length; i++) {
        const c = s2[i];
        if (s1CountMap[c]) {
            return "YES";
        }
    }
    return "NO";
}
