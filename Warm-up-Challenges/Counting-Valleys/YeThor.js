// Complete the countingValleys function below.
// https://www.hackerrank.com/challenges/counting-valleys/problem

// Time Complexity : O(n)

function countingValleys(n, originPath) {
  const path = originPath.split("").map(step => (step === "U" ? 1 : -1));

  const hikingInfo = path.reduce(
    (acc, step) => {
      const startingValley = acc.altitude === 0 && step < 0;
      startingValley && acc.valleyCount++;

      acc.altitude += step;

      return acc;
    },
    { altitude: 0, valleyCount: 0 }
  );

  return hikingInfo.valleyCount;
}
