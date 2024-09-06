"use strict"
//1

function summarize(num) {
    return function(value = 1) {
        return num + value;
    };
}

const addFive = summarize(5);

console.log(addFive(3));
console.log(addFive());

//2

function counter(startValue = 0, step = 1) {
    let currentValue = startValue;
  
    return {
      increment() {
        currentValue += step;
        return currentValue;
      },
      decrement() {
        currentValue -= step;
        return currentValue;
      },
      reset() {
        currentValue = startValue;
        return currentValue;
      },
      getValue() {
        return currentValue;
      }
    };
  }
  
  let count1 = counter(10, 2);
  
  console.log(count1.increment()); // 12
  console.log(count1.increment()); // 14
  console.log(count1.decrement()); // 12
  console.log(count1.reset());     // 10
  console.log(count1.getValue());  // 10

//3

function sequence(...funcs) {
    return function(initialValue) {
      let result = initialValue;
      funcs.forEach((fn) => {
        result = fn(result);
      });
      return result;
    }
  }
  
  function foo1(value) {
    return value + 1;
  }
  
  function foo2(value) {
    return value + 2;
  }
  
  function foo3(value) {
    return value + 3;
  }
  
  let func = sequence(foo1, foo2, foo3);
  
  console.log(func(5));

//3.1

function sequence(...funcs) {
    return function(initialValue) {
      return funcs.reduce((result, fn) => fn(result), initialValue);
    };
  }
  
  function foo1(value) {
    return value + 1;
  }
  
  function foo2(value) {
    return value + 2;
  }
  
  function foo3(value) {
    return value + 3;
  }
  
  let func = sequence(foo1, foo2, foo3);
  
  console.log(func(5));
  
  


  
