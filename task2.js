// LeetCode
// 9. Palindrome Number

var isPalindrome = function(x) {
    x = x.toString()
    let lenX = x.length
    // console.log(lenX)
    // console.log(x[1])
    
    let reversedX = ""

    for(i=lenX-1; i>=0; i--){
        reversedX += x[i]
        // console.log(i)
    }
    
    console.log(reversedX)
    x = Number(x)
    reversedX = Number(reversedX)
    isPalTrue = reversedX === x

    // console.log(x)
    // console.log(typeof x)
    // console.log(reversedX)
    // console.log(typeof reversedX)
    console.log(isPalTrue)
    return isPalTrue
};

isPalindrome(121)