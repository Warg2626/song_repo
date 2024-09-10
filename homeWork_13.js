"use strict";
//1

function fibonacci(n) {
    
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    
   
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  

  console.log(fibonacci(6)); // 8
  
  //2.0

  function findPalindrome(num) {
    let steps = 0;
    
    while (!isPalindrome(num)) {
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

  //2.1 з використаням звичайного циклу

  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function findPalindrome(num) {
    let steps = 0;
    let current = num;

    while (true) {
        let reversed = reverseNumber(current);
        let sum = current + reversed;
        steps++;

        if (sum === reverseNumber(sum)) {
            return { result: sum, steps };
        }

        current = sum;

    
        if (num === 196) {
            return { result: null, steps };
        }
    }
}

console.log(findPalindrome(312));
console.log(findPalindrome(96));
console.log(findPalindrome(196));

//3

function generatePermutations(arr) {
    let result = [];
  
    if (arr.length === 1) {
      return [arr];
    }
  
    for (let i = 0; i < arr.length; i++) {

      let current = arr[i];
  
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
  
      let remainingPerms = generatePermutations(remaining);
  
      for (let perm of remainingPerms) {
        result.push([current, ...perm]);
      }
    }
  
    return result;
  }
  
  let input = [1, 2, 3];
  let permutations = generatePermutations(input);
  
  console.log(permutations);