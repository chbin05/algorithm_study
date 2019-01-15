// Time Complexity: O(n)

function repeatedString(s, n) {
  const unitCount = s.split("").filter(item => item === "a").length;
  let result = unitCount * Math.floor(n / s.length);

  for (let i = 0; i < n % s.length; i++) {
    s[i] === "a" ? result++ : null;
  }

  return result;
}
