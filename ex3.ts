// boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

// number
let number: number = 2;
console.log("Value assigned to number is: " + number);

// string
let animal: string = "Frog";
console.log("Value assigned to animal is: " + animal);

// any
let number2: any = "22";
console.log("Value assigned to number2 is: " + number2);

// Array
let myArray: number[] = [1, 2, 3, 4, 5];
console.log(myArray);

/* 3 Alternative ways to print my array
for (let i = 0; i < myArray.length; i++) {
    console.log("The value " + myArray[i] + " is in myArray");
}

myArray.forEach(function (val) {
    console.log("The val is: " + val);
})

myArray.forEach((val) => {
    console.log("The val is: " + val);
})*/
