function jumpingOnClouds(c) {
  let index = 0;
  let jumpingCount = 0;

  while (index < c.length - 1) {
    c[index + 2] === 0 ? (index += 2) : index++;
    jumpingCount++;
  }

  return jumpingCount;
}
