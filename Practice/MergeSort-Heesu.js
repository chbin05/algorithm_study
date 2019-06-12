function mergeSort(arr) {
  const _merge = (low, mid, high) => {
    let leftSubArrayIdx = low;
    let rightSubArrayIdx = mid + 1;
    let mergedLocalArray = [];

    while (leftSubArrayIdx <= mid && rightSubArrayIdx <= high) {
      if (arr[leftSubArrayIdx] < arr[rightSubArrayIdx]) {
        mergedLocalArray.push(arr[leftSubArrayIdx]);
        leftSubArrayIdx++;
      } else {
        mergedLocalArray.push(arr[rightSubArrayIdx]);
        rightSubArrayIdx++;
      }
    }

    if (leftSubArrayIdx > mid) {
      mergedLocalArray = mergedLocalArray.concat(
        arr.slice(rightSubArrayIdx, high + 1)
      );
    } else {
      mergedLocalArray = mergedLocalArray.concat(
        arr.slice(leftSubArrayIdx, mid + 1)
      );
    }
    arr.splice(low, mergedLocalArray.length, ...mergedLocalArray);
  };
  const _mergeSort = (low, high) => {
    if (low >= high) {
      return;
    }
    let mid = low + Math.floor((high - low) / 2);
    _mergeSort(low, mid);
    _mergeSort(mid + 1, high);
    _merge(low, mid, high);
  };
  _mergeSort(0, arr.length - 1);
}
