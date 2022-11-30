function solution(s, f) {
    let a = f - s;
    if(a % 3 === 2) {
        return Math.ceil(a / 3) + 1
    }
    if(a % 3 === 0) {
        return a / 3
    } else {
        return Math.ceil(a / 3)
    }
}


solution(2, 4)
//https://www.codewars.com/kata/62c93765cef6f10030dfa92b/solutions/javascript