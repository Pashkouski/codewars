function findOdd(A) {
    const res = A.reduce((acc, item) => {
        if (acc[item]) {
            acc[item].push(item)
        } else {
            acc[item] = [item]
        }
        return acc
    }, {})
    return Object.values(res).find(el => el.length % 2 !== 0)[0]
}

