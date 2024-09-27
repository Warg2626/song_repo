"use strict";
//3
function sequenceAsync(asyncFunctions, initialValue) {
    return asyncFunctions.reduce((prevPromise, currentFunction) => {
      return prevPromise.then(currentFunction);
    }, Promise.resolve(initialValue));
  }
  
  const asyncFunction1 = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Function 1:", value);
        resolve(value + 1);
      }, 1000);
    });
  };
  
  const asyncFunction2 = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Function 2:", value);
        resolve(value * 2);
      }, 1000);
    });
  };
  
  const asyncFunction3 = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Function 3:", value);
        resolve(value - 3);
      }, 1000);
    });
  };
  
  sequenceAsync([asyncFunction1, asyncFunction2, asyncFunction3], 5).then(result => {
    console.log("Final result:", result);
  });
  
  

