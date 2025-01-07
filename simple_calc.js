const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question("Enter the first number: ", (firstInput) => {
    const num1 = parseFloat(firstInput);

    rl.question("Enter the second number: ", (secondInput) => {
      const num2 = parseFloat(secondInput);

      rl.question("Choose operation (add, subtract, multiply, divide): ", (operation) => {
        let result;

        switch (operation) {
          case "add":
            result = num1 + num2;
            break;
          case "subtract":
            result = num1 - num2;
            break;
          case "multiply":
            result = num1 * num2;
            break;
          case "divide":
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              result = "Error: Division by zero";
            }
            break;
          default:
            result = "Invalid operation";
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

calculator();
