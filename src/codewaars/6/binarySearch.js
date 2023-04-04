function binarySearch (arr, searchNumber) {
    let left = -1;
    let right = arr.length

    while(right - left > 1) {
        const middle = Math.floor((left + right) / 2)
        if(searchNumber === arr[middle]) {
            return middle
        }
        if (searchNumber < arr[middle]) {
            right = middle
        } else {
            left = middle
        }
    }
    return false
}

console.log(binarySearch([2, 4, 6, 18, 22, 23, 26, 29, 33 ,38, 41, 55, 76, 88, 99, 111], 4))