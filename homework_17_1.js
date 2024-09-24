"use strict";
//1
function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
      const delay = Math.random() * 1000; 
      
      setTimeout(() => {
        console.log(message[i]);
      }, delay);
    }
  }
  
  randomDelayPrint("Hello");
  