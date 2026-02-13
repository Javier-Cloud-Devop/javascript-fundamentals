const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {

  // Double e
  if (input[i] === 'e') {
    resultArray.push('e');
  }

  // Double u
  if (input[i] === 'u') {
    resultArray.push('u');
  }

  // Check all vowels
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
    }
  }

}

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
