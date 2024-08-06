//1.
let isPrime = 29; // Замість 29 можна ввести будь-яке число

if (isPrime <= 1) {
    console.log(`Число ${isPrime} не є простим числом`);
} else {
    let a = true;
    
    for (let i = 2; i < isPrime; i++) {
        if (isPrime % i === 0) {
            a = false;
            break;
        }
   }
    
  if (a) {
        console.log(`Число ${isPrime} є простим числом`);
    } else {
        console.log(`Число ${isPrime} не є простим числом`);
    }
}

//2.
let checkingNumber = 10000; // Замість 10000 можна ввести будь-яке число

for (let num = 1; num <= checkingNumber; num++) {
   let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
       if (num % i === 0) {
           sum += i;
       }
    }
    if (sum === num && num !== 0) {
        console.log(`Число ${num} є досконалим числом`);
   } 
        
    
}

//3.

let heigh = 5;
let tree = "";

for (let i = 1; i <= heigh; i++){
  for (let j = 0;j < heigh - i; j++) tree +=" ";
  for (let k = 0;k < 2 * i - 1; k++) tree +="*";
  if (i < heigh) tree += "\n";
}
console.log(tree);

