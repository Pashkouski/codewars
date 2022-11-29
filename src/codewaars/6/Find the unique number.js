function findUniq(arr) {
    let res = arr.sort((a,b) => a - b)
    if(res[0] == res[1]) {
        return res[res.length - 1]
    } else return res[0]
}


findUniq([ 3, 10, 3, 3, 3, 3, 4 ])

//https://www.codewars.com/kata/585d7d5adb2gi0cf33cb000235/train/javascrip