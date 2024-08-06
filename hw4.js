//1.
let Num = 29; // Замість 29 можна ввести будь-яке число

if (Num <= 1) {
    console.log(`Число ${Num} не є простим числом`);
} else {
    let a = true;
    
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            a = false;
            break;
        }
    }
    
    if (a) {
        console.log(`Число ${Num} є простим числом`);
    } else {
        console.log(`Число ${Num} не є простим числом`);
    }
}

//2.
let N = 10000; // Замість 10000 можна ввести будь-яке число

for (let num = 1; num <= N; num++) {
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