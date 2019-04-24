function checkMagazine(magazine, note) {
    const base = {};
    magazine.forEach(word => {
        if (base[word] > 0) {
            base[word]++;
        } else {
            base[word] = 1;
        }
    });

    const makable = note.every(word => {
        if (base[word]) {
            base[word]--;
            return true;
        } else {
            return false;
        }
    });

    if (makable) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
