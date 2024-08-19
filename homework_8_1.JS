function capitalizeStrings(strings) {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

const inputStrings = ["apple", "banaNA", "kiWi", "ORANGE"];
const capitalizedStrings = capitalizeStrings(inputStrings);
console.log(capitalizedStrings); 
