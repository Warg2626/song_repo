"use strict";
//2
function debounce(callback, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback(...args); 
      }, delay);
    };
  }
  
  const expensiveOperation = () => console.log("Виконую складну операцію...");
  
  const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
  
  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  