

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let arr= birds.filter(bird => !geese.includes(bird))

    return arr

};


//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript


