// Complete the rotLeft function below.
function rotLeft(a, d) {
    const newArr = a.splice(0, d);
    return a.concat(newArr);
}
