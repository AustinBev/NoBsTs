// to run in terminal: npx ts-node functions-test.ts
// the "): number" is the explicit return type; TS could infer this

// Default export: Adds two numbers
export default function addTwoNums(a: number, b: number) {
    return a + b;
}

// Named export: Concatenates two strings with a plus sign between
export const concatTwoStrings = (first: string, second: string): string =>
    `${first} + ${second}`;

// Named export: Concatenates two strings with a space between
export function concatTwoStringsFunc(first: string, second: string) {
    return `${first} ${second}`;
}

// Formats a title and parameter into a single string
export const format = (title: string, param: string | number): string =>
    `${title} ${param}`;

// Prints the formatted title and parameter to the console
export function printFormat(title: string, param: string | number): void {
    console.log(`${title} ${param}`);
};

// Returns a resolved Promise with a string showing "data from <url>"
export const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`Data from ${url}`);

// Combines a salutation with any number of names into a single string
export function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`;
};

// use a string of names to return same thing
export let names: string[] = ["Kurtis", "Olive", "Erin"];

export function introduce2(salutation: string, names: string[]): string {
    return `${salutation} ${names.join(' ')}`;
}

// Returns the user's first and last name as a single string
export const userName = (first: string, last: string): string =>
    `${first} ${last}`;