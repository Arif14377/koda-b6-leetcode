// LeetCode
// 2634. Filter Elements From Array
// belum berhasil disubmit

arr1 = [12, 14, 20, 23]

var filter = (arr, fn) => {
    let filteredArr = fn(arr)
    
    // console.log(filteredArr)
    return filteredArr
};

function filtering (arr) {
    let filteredArr = []
    arr.forEach(element => {
        if (element <= 20) {
            filteredArr.push(element)
        }
    });
    return filteredArr
}

filter(arr1, filtering)