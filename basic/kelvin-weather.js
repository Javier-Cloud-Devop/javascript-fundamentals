// Kelvin temperature for today
const kelvin = 0;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Log Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
