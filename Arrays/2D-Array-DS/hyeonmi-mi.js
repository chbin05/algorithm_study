function hourglassSum(arr) {
    let result = Number.MIN_SAFE_INTEGER;

    const sumHourglasses = function(arr, p1, p2){
        const shape = [
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 1]
        ];

        let sum = 0;
        for(var j=0; j<shape.length; j++){        
            for(var jj=0; jj< shape.length; jj++){
                if(shape[j][jj] === 1){
                   sum += arr[j+p1][jj+p2]
                }
            }
        }
        return sum;
    }


    for(let i=0; i<4; i++){
      for(let j=0; j<4; j++){
        result = Math.max(result, sumHourglasses(arr, i, j));
      }
    }

    return result;
}