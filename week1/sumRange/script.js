const range = (num1, num2, step=1) => {
    let outcome = [];
    const delta = (num1 > num2) ? num1-num2 : num2-num1;
    if (Math.sign(step)===1) {
        for (i = 0; i <= delta; i++) {
            if (i % step === 0) {
                outcome.push(num1 + (i));
            }
        }
    }
    if (Math.sign(step)===-1) {
        for (i = 0; i <= delta; i++) {
            console.log('hallo');
            if (i % step === 0) {
                outcome.push(num1 - (i));
            }
        }
    }
    return outcome
}

const sum = (rangeArray) => {
    let sum = 0;
    for (i=0; i<=rangeArray.length-1; i++) {
        sum += rangeArray[i];
    }
    return sum;
}
console.log(sum(range(1, 10, 2)));
