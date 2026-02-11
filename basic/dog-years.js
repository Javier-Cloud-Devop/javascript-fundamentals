// My current age in human years
const myAge = 37;

// First two years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

// Remaining human years after the first two
let laterYears = myAge - 2;
laterYears *= 4;

// Total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Name in lowercase
const myName = 'Javier'.toLowerCase();

// Output result
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
