const stdin = process.stdin;
stdin.setEncoding("utf8");
let data = "";
stdin.on("data", function(chunk) {
  data += chunk;
});
stdin.on("end", function() {
  const inputs = data.split(/[\n\r]+/);
  
  /* parse here */
  
  const N = parseInt(inputs[0]);
  const directions = inputs[1].split("").slice(0, N);
  const lengths = splitAndConvert(inputs[2], N);

  const result = solve(directions, lengths, N);
  
  // print the result
  
  console.log(result);
  */
});
function splitAndConvert(stringOfNumbers, numOfValid) {
  return stringOfNumbers
    .split(" ")
    .slice(0, numOfValid)
    .map(function(num) {
      return parseInt(num);
    });
}

/* implement the solution */
function solve(arguments) {
}
