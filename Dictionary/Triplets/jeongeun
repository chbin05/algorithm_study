function countTriplets(arr, r) {
    const obj = {};
    const newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else { 
            obj[arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }
    
    let sum = 0;

    if (r === 1) {
        for (let i = 0; i < newArr.length; i++) {
            const firstVal = newArr[i];
            const target = obj[firstVal];
            sum += target * (target - 1) * (target - 2) / 6;
        }

        return sum;
    } 

    for (let i = 0; i < newArr.length; i++) {
        const firstVal = newArr[i];
        const target = obj[firstVal];
        sum += (target || 0) * (obj[firstVal * r] || 0) * (obj[firstVal * r * r] || 0);
    }

    return sum;
}
