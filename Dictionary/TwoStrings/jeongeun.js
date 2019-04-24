function twoStrings(s1, s2) {
    const isS1Big = s1.length > s2.length;
    const target = isS1Big ? s2 : s1;
    const compare = isS1Big ? s1 : s2;
    const targetLength = target.length;
    const tArr = target.split(""); 

    for (let i = 0; i < targetLength; i++) {
        if (compare.indexOf(tArr[i]) >= 0) { 
            return "YES";
        }
        if (i === targetLength - 1) { 
           return "NO";
        }
    }
}
