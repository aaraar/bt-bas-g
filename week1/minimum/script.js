const min = (argOne, argTwo) => {
    outcome = argOne < argTwo ? argOne : argTwo;
    return outcome;
};

console.log(min(6, 3));
console.log(min(3, 6));
console.log(min(10, 0));
console.log(min(0, 10));
console.log(min(-6, 3));
console.log(min(3, -6));
console.log(min(-10, 0));
console.log(min(0, -10));