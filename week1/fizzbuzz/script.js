const fizz = 'fizz', buzz = 'buzz', fizzbuzz = fizz + buzz;

//Eerst geprobeerd met If statements
// for(i=1; i<=100; i++){
//     let iterationOutcome;
//     if (i%5===0 && i%3===0) {
//         iterationOutcome = fizzbuzz;
//     }
//     else if (i%3=== 0){
//         iterationOutcome = fizz;
//     }
//     else if (i%5===0) {
//         iterationOutcome = buzz;
//     }
//     else {
//         iterationOutcome = i;
//     }
//     console.log(iterationOutcome);
// }

//Maar wilde het ook graag met de ternary operator proberen
for(i=1; i<=100; i++) {
    let iterationOutcome = (i%5===0 && i%3===0) ? fizzbuzz : ((i%3=== 0) ? fizz : ((i%5===0) ? buzz : i))
    console.log(iterationOutcome);
}