function checkMagazine(magazine, note) {
  let result = "Yes";
  note.forEach(item => {
    if (result === "Yes" && magazine.indexOf(item) > -1) {
      magazine.splice(magazine.indexOf(item), 1);
    } else {
      result = "No";
    }
  });

  console.log(result);
}
