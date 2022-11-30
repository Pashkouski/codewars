function findNb(m) {
    let max = 0;
    let res = 0;
    while(max < m) {
        res++
        max += res ** 3
    }
    return m === max ? res : -1
}

findNb(135440716410000) //4824

//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript