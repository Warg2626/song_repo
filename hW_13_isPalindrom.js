function siPalindrome(str) {
  
    str = str.toLowerCase().replace();
    
    
    return str === str.split('').reverse().join('');
}

function reverseNumber(num) {

    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findPalindrome(num) {
    let steps = 0;
    
    
    while (!siPalindrome(num.toString())) {
        const reversed = reverseNumber(num);
        num += reversed;
        steps++;
        
       
        if (steps > 1000) {
            return {
                result: null,
                steps: steps,
                message: "Можливо, це Число Лішрел, паліндром не знайдений."
            };
        }
    }
    
    return {
        result: num,
        steps: steps
    };
}

const result1 = findPalindrome(312);
const result2 = findPalindrome(123);
const result3 = findPalindrome(196);
console.log(result1);
console.log(result2);
console.log(result3);
