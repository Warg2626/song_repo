"use strict";

//1.0
function logArguments(fn) {
    return function() {
        console.log('Аргументи:', ...arguments);
        return fn.apply(this, arguments);
    };
}

function sum(a, b) {
    return a + b;
}

const loggedSum = logArguments(sum);

console.log(loggedSum(3, 7)); 



//1.1

// function logArguments(fn) {
//     return function(...args) {
//         console.log('Аргументи:', ...args); 
//         return fn(...args); 
//     };
// }

// function sum(a, b) {
//     return a + b;
// }

// const loggedSum = logArguments(sum);

// console.log(loggedSum(6, 5));  

//3

function decorate(fn, count) {
    let calls = 0;

    return function(...args) {
        if (calls < count) {
            calls++;
            return fn(...args);
        } else {
            console.log("Function call limit reached.");
        }
    };
}

function sum(a, b) {
    return a + b;
}

let decoratedFn = decorate(sum, 3);

console.log(decoratedFn(3, 3)); // 6
console.log(decoratedFn(1, 2)); // 3
console.log(decoratedFn(6, 1)); // 7
console.log(decoratedFn(10, 20)); // Function call limit reached