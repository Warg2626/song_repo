//1.0
function doubleLetter(str) {
    let doubledStr = '';
    
    for (let i = 0; i < str.length; i++) {
        doubledStr += str[i] + str[i];
    }
    
    return doubledStr;
}

console.log(doubleLetter("hello")); 
console.log(doubleLetter("abc"));   
console.log(doubleLetter("123")); 

//1.1
function doubleCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.slice(i, i + 1).repeat(2);
    }
    return result;
}

console.log(doubleCharacters("hello"));
console.log(doubleCharacters("abc"));
console.log(doubleCharacters("123"));

//2
function padString(str, length, symbol, toLeft = false) {
   
    if (length <= str.length) {
        return str;
    }

   
    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength);

    if (toLeft) {
        return padding + str;
    } else {
        return str + padding;
    }
}


console.log(padString("Road", 6, "=>"));
console.log(padString("Road", 6, "<=", true));

3//
function camelCase(str, separator) {
    
    let words = str.split(separator);
    let camelCased = words[0].toLowerCase();
    
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        camelCased += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    
    return camelCased;
}
console.log(camelCase("hello_for_example", "_"));
console.log(camelCase("convert-to-camel-case", "-"));

