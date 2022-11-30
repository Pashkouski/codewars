function friend(friends){
    let res = [];
    for(let i = 0; i < friends.length; i++) {
        if(friends[i].length === 4) {
            res.push(friends[i])
        }
    }
    return res
}



friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])// ["Ryan"]

//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript