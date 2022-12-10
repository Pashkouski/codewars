function hasSurvived(attackers, defenders) {
    let countA = 0
    let countD = 0
    let sumA = 0
    let sumD = 0
    for (let i = 0; i < attackers.length || i < defenders.length; i++) {
        sumA += attackers[i]
        sumD += defenders[i]

        if (attackers[i] > defenders[i] || defenders[i] == undefined) {
            countA++
        } else if (defenders[i] > attackers[i] || attackers[i] == undefined) {
            countD++
        }
    }

    if (countA == countD) {
        if (sumA > sumD) {
            return false
        } else {
            return true
        }
    }
    return countD > countA
}


//https://www.codewars.com/kata/634d0f7c562caa0016debac5/solutions/javascript