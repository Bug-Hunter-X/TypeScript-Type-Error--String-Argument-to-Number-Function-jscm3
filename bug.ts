function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(result);