"use strict";
//1
function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);
      }, 3000); // Затримка 3 секунди
    });
  }
  
  // Приклад використання
  sumArrayPromise([1, 2, 3, 4, 5]).then(console.log); // Виведе 15 через 3 секунди
  