
console.log("Hello world");

let [ , ,first,second] = process.argv;

const sum = (a,b) => a + b;
console.log(sum(+first, +second));

// const marks = [60, 90, 75, 80];
// console.log(Math.max(...marks));

// console.log(process.argv);
// DOM - there is no dom 
// no - document, window will not work
// console.log(global);