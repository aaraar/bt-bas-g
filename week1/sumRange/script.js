const range = (num1, num2, step = 1) => {
    let outcome = [];
    const highestNum = (num1 > num2) ? num1 : num2;
    const lowestNum = (num1 < num2) ? num1 : num2;
    const delta = (highestNum === num1) ? num1 - num2 : num2 - num1; // Checkt welke getal hoger is

    if (Math.sign(step) === 1) { // Als de step een positief getal is
        for (i = 0; i <= delta; i++) {
            if (i % step === 0) {
                outcome.push(lowestNum + (i));
            }
        }
    } else if (Math.sign(step) === -1) { // Als de step een negatief getal is
        for (i = 0; i <= delta; i++) {
            if (i % step === 0) {
                outcome.push(highestNum - (i));
            }
        }
    } else if (Math.sign(step) === 0) { // Als de step 0 is
        for (i = 0; i <= delta; i++) {
            outcome.push(lowestNum + (i));
        }
    }
    return outcome;
};

const sum = (rangeArray) => {
    const total = rangeArray.reduce((acc, cur) => acc + cur, 0);
    return total;
};

console.log(sum(range(1, 10))); // Het werkt zonder step
console.log(sum(range(10, 1))); // Oook als het andersom staat
console.log(sum(range(1, 10, -1))); // Negatieve steps
console.log(sum(range(10, 1, -1))); // Werken ook allebei de kanten op
console.log(sum(range(10, 1, 0))); // Step van 0 idem dito
console.log(sum(range(1, 10, 0))); // Beide kanten op