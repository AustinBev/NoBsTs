// Declare a variable 'userName' and set it to the string "Jack"
let userName: string = "Jack";

// Declare a boolean variable 'hasLoggedIn' and set it to true
let hasLoggedIn: boolean = true;

// Append the string " Herrington" to the value of 'userName'
userName += "Herrington";

// Output the value of 'hasLoggedIn' to the console
console.log(hasLoggedIn);

// Declare a number variable 'myNumber' and set it to 10
let myNumber: number = 10;

// Declare a variable 'myRegex' containing a regular expression that matches "foo"
let myRegex: RegExp = /foo/;

// Split 'userName' into an array of strings using space as the separator
// Example: "Jack Herrington" → ["Jack", "Herrington"]
const names: string[] = userName.split(" ");

// Create an array of numbers [1, 2, 3] using generic Array type notation
let nums: number[] = [1,2,3];
// or
let nums2: Array<number> = [1,2,3];

// Define an interface 'Person' that describes an object with 'first' and 'last' string properties
interface Person {
    first: string;
    last: string;
}

// Create an object 'myPerson' matching the Person structure
const myPerson: Person = {
    first: "Jack",
    last: "Ripper",
}
// or when it's obvious and doesn't need to infer
const myPerson2 = {
    first: "Kurtis",
    last: "Smurtis",
}
// or when you want a literal type
const myPerson3 = {
    first: "Olive",
    last: "Smallive",
} satisfies Person;


// Create a mapping (object) where numeric keys map to string values
const ids: Record<number, string> = {
    10: "a",
    20: "b",
}

// Add a new key-value pair: 30 → "c"
ids[30] = "c";

// If the value at key 30 equals "D", run the code inside the block (currently empty)
if ( ids[30] === "D" ) {

}

// Loop from i = 0 to i < 10, printing the current value of i each time
for ( let i = 0; i < 10; i++) {
    console.log(i);
}

// For each value in the array [1, 2, 3], print it to the console
[1,2,3].forEach((num) => {
    console.log(num);
});
// or
[1,2,3].forEach((v) => console.log(v));

// Create a new array 'out' by multiplying each number in [4, 5, 6] by 10
// Result: [40, 50, 60]
const out: Array<number> = [4,5,6].map((v) => v * 10);
// or
const out2: number[] = [4,5,6].map((v) => v * 10);
