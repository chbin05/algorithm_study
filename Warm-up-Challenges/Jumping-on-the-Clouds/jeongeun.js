// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let currentIndex = 0;
    const endIndex = c.length - 1;
    let step = 0;
    while(currentIndex < endIndex) {
        if(c[currentIndex + 2] === 0) {
            currentIndex = currentIndex + 2;
        } else {
            currentIndex++;
        }
        step++;
    }
    return step;
}
