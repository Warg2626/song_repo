//1
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}


const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);


//1.2
function reverseArray(arr) {
    
    return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));