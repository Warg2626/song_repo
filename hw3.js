//  let number = 15;
// if (number % 3 === 0 && number % 5 === 0) {// 0 ділиться і на 3 і на 5
//     // результат FizzBuzz 
//     console.log("FizzBuzz"); 

// } else if (number % 3 === 0) {// якщо число ділиться на 3 і залишок буде 0
//     // результат Fizz
//     console.log("Fizz");

// } else if (number % 5 === 0) {// якщо число ділиться на 5 і залишок буде 0
//     // результат Buzz
//     console.log("Buzz");

// } else if (number === 15){
//      console.log("FizzBuzz");// якщо число === 15
//      // результат FizzBuzz
//  }  else {
//      console.log(number);
// }
//________________________________________________

// let year = 0; // Замість 0 можна ввести будь-яке число

// if (year % 10 === 1 && year % 100 !== 11) {
//     console.log("Вам " + year + " рік"); //Перевірка для рік
// } else if ((year % 10 >= 2 && year % 10 <= 4) && !(year % 100 >= 12 && year % 100 <= 14)) {
//     console.log("Вам " + year + " роки"); //Перевірка для роки
// } else {
//     console.log("Вам " + year + " років");//Перевірка для років
// }

//__________________________________________________


// let year = 1993; // Замість 1993 можна ввести будь-який рік

// if (year % 4 === 0) // 1. Перевірка, чи рік кратний 4
// {
//     if (year % 100 === 0) // 2. Перевірка, чи рік кратний 100 
//     {
//         if (year % 400 === 0) // 3. Перевірка, чи рік кратний 400
//         {
//             console.log(year + " є високосним роком");// Якщо рік кратний 4, але не кратний 100
//         } else {
//             console.log(year + " не є високосним роком");//Якщо рік не кратний 4
//         }
//     } else {
//         console.log(year + " є високосним роком");
//     }
// } else {
//     console.log(year + " не є високосним роком");
// }
