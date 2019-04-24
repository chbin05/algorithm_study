function twoStrings(s1, s2) {
    const base = {};
    [...s1].forEach(char1 => {
        base[char1] = true;
    });

    return [...s2].some(char2 => base[char2]) ? "YES" : "NO";
}
