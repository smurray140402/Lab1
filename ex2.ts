// Function that prints the calculated value
function addition(value: string) {
    console.log("Value is: " + value);
}

let firstVal: number = 42;
let secondVal: number = 1;

// Adds first and second val and converts to string
let sumOfVals: string = (firstVal + secondVal).toLocaleString();

// Call on addition and pass the string sumOfVals
addition(sumOfVals);