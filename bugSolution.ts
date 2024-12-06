function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or parsable strings.');
  }
  return numA + numB;
}

const result1 = add(5, 10); // Correct: numbers
const result2 = addSafe(5, '10'); // Correct: string and number
const result3 = addSafe('5', '10'); // Correct: strings
console.log(result1, result2, result3);
//Error Handling
try {
  const result4 = addSafe('hello', 10); //Throws error
  console.log(result4);
} catch (error) {
  console.error(error.message);
}
