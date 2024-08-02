let year = 0;

const isYearEndsWith1ButNot11 = year % 10 === 1 && year % 100 !== 11;
const isYearEndsWith2To4ButNot12To14 = (year % 10 >= 2 && year % 10 <= 4) && !(year % 100 >= 12 && year % 100 <= 14);

if (isYearEndsWith1ButNot11) {
    console.log("Вам " + year + " рік"); 
} else if (isYearEndsWith2To4ButNot12To14) {
    console.log("Вам " + year + " роки"); 
} else {
    console.log("Вам " + year + " років");
}
