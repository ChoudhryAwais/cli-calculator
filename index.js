#! /usr/bin/env node
import inquirer from "inquirer";
let calcu = await inquirer.prompt([
    {
        name: "number1",
        message: "Enter first number?",
        type: "number",
    },
    {
        name: "number2",
        message: "Enter second number?",
        type: "number",
    },
    {
        name: "operator",
        message: "Enter your operator?",
        type: "list",
        choices: ["+", "-", "*", "/"]
    },
]);
if (calcu.operator === "+") {
    console.log("Result is: ", parseInt(calcu.number1) + parseInt(calcu.number2));
}
else if (calcu.operator === "-") {
    console.log("Result is: ", parseInt(calcu.number1) - parseInt(calcu.number2));
}
else if (calcu.operator === "*") {
    console.log("Result is: ", parseInt(calcu.number1) * parseInt(calcu.number2));
}
else if (calcu.operator === "/") {
    console.log("Result is: ", parseInt(calcu.number1) / parseInt(calcu.number2));
}
else {
    console.log("Invalid option");
}
