function isValidWalk(walk) {
    console.log(walk)
    if(walk.length !== 10) {
        return false
    }
    let n = 0,
        s = 0,
        w = 0,
        e = 0;

    for(let i = 0; i < walk.length; i++) {
        if(walk[i] == 'n') {
            n++
        }
        if(walk[i] == 's') {
            s++
        }
        if(walk[i] == 'w') {
            w++
        }
        if(walk[i] == 'e') {
            e++
        }

    }
    return n == s && w == e
}




//https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript