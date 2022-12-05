function sumTwoSmallestNumbers(numbers) {
    let res = numbers.sort( (a, b) => a - b);
    return res[0] + res[1]
}


//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript