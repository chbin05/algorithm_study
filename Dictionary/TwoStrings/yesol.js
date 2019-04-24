function twoStrings(s1, s2) {
  let result = "NO";

  for (let letter of s1) {
    if (s2.search(letter) > -1) {
      return "YES";
    }
  }

  return result;
}
