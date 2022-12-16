function lastSurvivor(letters, coords) {
    return coords.reduce((acc, curr) => acc.slice(0, curr) + acc.slice(curr + 1), letters)
}

//https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript