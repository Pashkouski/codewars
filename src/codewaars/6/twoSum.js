let twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let resKey = target - nums[i]
        if (obj[resKey] && obj[resKey] !== i) {
            console.log([i, obj[resKey]])
            return [obj[resKey], i]
        }
    }
    return []
}