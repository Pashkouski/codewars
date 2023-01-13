function persistence(num) {
    let result = 0;
    let str = String(num)
    while (str.length > 1) {
        str = String([...str].reduce( (acc, el) => acc * el))
        result++
    }
    return result
}

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript