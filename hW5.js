//1.
function reversString(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

console.log(reversString("qwerty"));

//2.
// function isPalindrome(str) {
//     str = str.toLowerCase();

//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return str === reversed;
// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello")); 

function checkIsPalindrome(str) {
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char !== ' ') {
            cleanedStr += char;
        }
    }
    
    let reversed = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversed += cleanedStr[i];
    }
    
    return cleanedStr === reversed;
}

console.log(checkIsPalindrome("level"));          // true
console.log(checkIsPalindrome("hello"));          // false
console.log(checkIsPalindrome("а мене нема"));    // true
console.log(checkIsPalindrome("і що сало ласощі")); // true


//3.
function findGCD(a, b) {
    // Використовуємо алгоритм Евкліда (прийшлось ще гуглити що це таке є))
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(findGCD(32, 12)); // 4
console.log(findGCD(112, 30)); // 2
console.log(findGCD(777, 666)); // 111