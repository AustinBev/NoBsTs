// Making a generic function

// returns a state and a state setter
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        // shorthand for return str
        () => val,
        // takes a T, and then sets the T value to the incoming T
        (v: T) => {
            val = v;
        }
    ]
}

const [get, set] = simpleState(10);
console.log(get());
set(62);
console.log(get());


// overriding inferred generic types
const [get2, set2] = simpleState<string | null>(null);
console.log(get2());
set2("str");
console.log(get2());

// Example: Ranker
function ranker<RankItem>(items: RankItem[], rank: (v: unknown) => number): unknown[] {
    const ranks = items.map((item) => ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}