const flatten = (arrays) => {
    const reducerArgs = (accumulator, current) => accumulator.concat(current);
    return arrays.reduce(reducerArgs);
};
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));