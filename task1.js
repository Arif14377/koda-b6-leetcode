// LeetCode
// 1. Two Sum

arr = [2,7,11,15]


let twoSum = function(nums, target) {
    resIdx = []
    nums.forEach((element, idx) => {
        // indexElement = nums.indexOf(element)
        // console.log(`${element} adalah indeks ke-`+ nums.indexOf(element))
        for (i=0; i<nums.length; i++) {
            if (element + nums[i] === target && idx !== i) {
                // console.log(element)
                // console.log(idx)
                resIdx.push(idx)
            } else {
                
            }
        }
    });
    return resIdx
}


twoSum(arr, 9)