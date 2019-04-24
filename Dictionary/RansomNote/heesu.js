function checkMagazine(magazine, note) {
    const magazineCountMap = {};
    for (let i = 0; i < magazine.length; i++) {
        const word = magazine[i];
        magazineCountMap[word] = (magazineCountMap[word] || 0) + 1;
    }

    for (let i = 0; i < note.length; i++) {
        const word = note[i];
        // console.log(word, magazineCountMap[word]);
        if (magazineCountMap[word]) {
            magazineCountMap[word]--;
        } else {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}
