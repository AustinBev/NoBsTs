// function parameters
export function printToFile(test: string, callback: () => void): void {
    console.log(test);
    callback();
}

// functions as types
export type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate);
}

// make a mutation function
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1,2,3], (v) => v * 10));

// function with params
// export function arrayMutate(
//     numbers: number[],
//      mutate: (v: number) => number
//     ): number[] {
//     return numbers.map(mutate);
// }

export type AdderFunction = (v: number) => number;

// returning functions (add one to any value)
export function createAdder(num: number): (val: number) => number {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));

