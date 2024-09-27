"use strict";
//2
function concurrentPromises(promises, maxConcurrent) {
	const results = [];
	let executing = [];
  
	const handlePromise = (promise) => {
	  return promise
		.then((result) => {
		  results.push(result);
		
		  executing.splice(executing.indexOf(promise), 1);
		});
	};
  
	return new Promise((resolve) => {
	  promises.forEach((promise) => {
		const run = () => {
		  if (executing.length >= maxConcurrent) {
			return Promise.race(executing).then(run);
		  }
		  const p = handlePromise(promise);
		  executing.push(p);
		  return p;
		};
  
		run();
	  });
  
	  Promise.all(promises).then(() => resolve(results));
	});
  }
  
  concurrentPromises([
	new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
	new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
	new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
  ], 2).then(console.log);
  