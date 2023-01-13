function betterThanAverage(classPoints, yourPoints) {
    let result = classPoints.reduce((acc, el) => acc + el)
    return (result / classPoints.length) < yourPoints
}

//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript