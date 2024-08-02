// Страрий варіант

// let year = 1993; 

// if (year % 4 === 0)
// {
//     if (year % 100 === 0) 
//     {
//         if (year % 400 === 0) 
//         {
//             console.log(year + " є високосним роком");
//         } else {
//             console.log(year + " не є високосним роком");
//         }
//     } else {
//         console.log(year + " є високосним роком");
//     }
// } else {
//     console.log(year + " не є високосним роком");
// }

//  Новий Варіант

let year = 1993;

const isLeapYear = (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(year + " є високосним роком");
}   else {
    console.log(year + " не є високосним роком");
}