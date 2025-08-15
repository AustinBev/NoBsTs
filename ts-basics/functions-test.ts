import addTwoNums, { concatTwoStrings, concatTwoStringsFunc, format, fetchData, introduce, names, introduce2, userName } from './functions.js';

console.log(addTwoNums(1, 2)); // 3
console.log(concatTwoStrings('Hello', 'World')); // Hello + World
console.log(concatTwoStringsFunc('Hello', 'World')); // Hello World

console.log(format('title here', 2));

console.log(fetchData('wwww.website.com'));

console.log(introduce("Hello", "Kurtis", "Olive", "Erin"));

console.log(introduce2("Hello", names));

console.log(userName("Kurtis", "Beveridge"));
