"use strict";
//3
function intervalRace(functions, interval, callback) {
    let results = [];
    let index = 0;
  
    const executeFunction = () => {
      results.push(functions[index]());
  
      index++;
  
      if (index === functions.length) {
        callback(results);
      } else {
       
        setTimeout(executeFunction, interval);
      }
    };
  
    executeFunction();
  }
  
  const func1 = () => "Результат 1";
  const func2 = () => "Результат 2";
  const func3 = () => "Результат 3";
  
  intervalRace([func1, func2, func3], 1000, (results) => {
    console.log("Результати:", results);
  });
  