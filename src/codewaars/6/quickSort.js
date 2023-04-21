const arr = [3,5,6,7,8,12,11,123,44,12,15,16,25,66,63]


const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]

    const less = []
    const greater = []

    for (let i = 0; i < arr.length; i++) {

        if(pivotIndex === i) {
            continue
        }

        if(arr[i] <= pivot) {
            less.push(arr[i])
        } else  {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}
