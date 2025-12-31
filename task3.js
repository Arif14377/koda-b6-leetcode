// LeetCode
// 27. Remove Element

// masih wrong answer
// hasil masih string kosong []
// tapi kalau di log di terminal udah keluar hasil array yang tersisa setelah dihapus

arr1 = [3,2,2,3]
angka = 3

var removeElement = (nums, val) => {
    // console.log(nums)
    // console.log(val)
    tampung = nums
    removed = []
    
    nums.forEach((element, idx) => {
        if (element == val) {
            tampung.splice(idx, 1)
            removed = [
                ...removed,
                element
            ]
        }
    });
    // console.log(removed)
    k = tampung.length

    console.log(tampung)
    return tampung.length, tampung
    // console.log(tampung.length)
};

removeElement(arr1, angka)