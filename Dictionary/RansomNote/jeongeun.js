function checkMagazine(magazine, note) {
    for (let i = 0; i < note.length; i++) { 
        const index = magazine.indexOf(note[i]);
        
        if (index >= 0) {
            magazine.splice(index, 1);
        } else { 
            console.log("No");
            break;
        }

        if (i === note.length - 1) {
            console.log("Yes");
        } 
    }
}
