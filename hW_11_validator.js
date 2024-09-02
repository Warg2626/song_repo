"use strict";

function validateDecorator(fn, validator) {
    return function(...args) {
        if (validator(...args)) {
            return fn(...args);
        } else {
            
            throw new Error("Validation failed");
        }
    };
}

function processData(data) {
    return `Processed data: ${data}`;
}

function isNonEmptyString(input) {
    return typeof input === 'string' && input.trim().length > 0;
}

const validatedProcessData = validateDecorator(processData, isNonEmptyString);

try {
    console.log(validatedProcessData("Hi Cyryll!")); // Успішний виклик
    console.log(validatedProcessData("")); // Помилка валідації
} catch (error) {
    console.error(error.message); // "Validation failed"
}