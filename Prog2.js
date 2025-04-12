// Implementation of Javascript Objects and Generators using a calculator

const calc = {
    'Addition': (a, b) => a + b,
    'Subtraction': (a, b) => a - b,
    'Multiplication': (a, b) => a * b,
    'Division': (a, b) => b ? a / b : 'Error: Division by zero'
  };
  
  function* gen(a, b) {
    for (let op in calc) {
      yield `${op}: ${calc[op](a, b)}`;
    }
  }
  
  const num1 = 10, num2 = 5;
  
  for (let res of gen(num1, num2)) console.log(res);
  