//1.0
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function filterPrimes(numbers) {
//     return numbers.filter(isPrime);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const primeNumbers = filterPrimes(numbers);

// console.log(primeNumbers);

//1.1
function isPrime(num) {
    return num > 1 && ![...Array(Math.floor(Math.sqrt(num)) + 1).keys()].slice(2).some(i => num % i === 0);
}

function filterPrimes(numbers) {
    return numbers.filter(isPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNumbers = filterPrimes(numbers);

console.log(primeNumbers);

//2
function notificationFromMessangers(notifications) {
    return notifications.reduce((result, notification) => ({
        ...result,
        [notification.sours]: (result[notification.sours] || []).concat(notification)
    }), {});
}

const notifications = [
    { sours: "hillel", text: "Ви присутні на уроці?", day: "23.08.2024" },
    { sours: "telegram", text: "Ви отримали повідомлення", day: "19.08.2024" },
    { sours: "hillel", text: "Ви отримали оцінку", day: "24.08.2024" },
];

const groupedNotifications = notificationFromMessangers(notifications);

console.log(groupedNotifications);

//3

function groupArray(array, callback) {
    
    const keys = array.map(callback);
    const uniqueKeys = Array.from(new Set(keys));;

    const result = {};

    uniqueKeys.forEach((key) => {
        result[key] = array.filter((item) => callback(item) === key);
    });

    return result;
}

const students = [
    {name: "Roby", city: "Odessa"},
    {name: "Sergey", city: "Chernivtsy"},
    {name: "Ehhy", city: "Odessa"},
    {name: "Annika", city: "Chernivtsy"},
    {name: "Kostia", city: "Kyiv"},
    {name: "Irina", city: "Kyiv"},
];

const groupedStudents = groupArray(students, (student) => student.city);

console.log("groupedStudents:", groupedStudents);
