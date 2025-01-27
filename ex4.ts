// Function that does not trim
function stringCount(value: string):number {
    return value.length;
}

// Function that trims
function stringTrim(value: string):number {
    return value.trim().length;
}

// Combined function stringCount and stringTrim that can do both
function stringOptional(value: string, option: boolean):number {
    if (option == true) {
        return value.trim().length;
    }
    else {
        return value.length;
    }
}

// Test cases and output result
console.log(stringCount("Sean"));
console.log(stringCount("Alphabet"));

console.log(stringTrim(" Sean "));
console.log(stringTrim(" Alphabet "));

console.log(stringOptional(" Sean ", true));
console.log(stringOptional(" Alphabet ", false));