
// Function declaration -> we can call it before its declaration
function walk() {
    // console.log('walk');
}


// Anonymous Function expression -> cannot call it before its declaration(exactly like a variable)
let run = function() {
    // console.log('run');
};

let move = run;
run();
move();










// Arguments
function sum(a, b) {
    return a + b;
}

// console.log(sum(1));    //output -> NaN

// flexibility
// every function in javascript has a special object called arguments

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//     {
//         total += value;
//     }
//     // console.log(arguments);
//     return total;
// }
// for of -> to anybody who has a iterator like this arguments object, arrays etc but plain object we create with object literal dont have a iterator.

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,10));







// In modern javascript , if you want to have a function with varying number of parameter , you can use the rest operator.

// When we apply the rest operator to a parameter of a function , we can pass a varying number of arguments and rest operator will take all of them and put themm in an array

function sum(...args) {
    // console.log(args);
    return args.reduce((sum,args) => sum+=args);
}
// console.log(sum(1,2,3,4,5,10));



// function sum(discount, ...args) {
//     // console.log(args);
//     const total = args.reduce((sum,args) => sum+=args);
//     return total * (1 - discount)
// }
// console.log(sum(0.1,20,30));



// rest parameter must be last formal parameter,
// function sum(...args,someValue) {
//     // console.log(args);
//     return args.reduce((sum,args) => sum+=args);
// }
// this is not allowed





// Default Parameters
// make sure if you want to give a parameter a default value, make sure it is at last.
function interest(principal, rate = 3.5, years = 5) {
    return principal * (rate/100) * years;
}

console.log(Math.floor(interest(10000)));