// Joining Arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');   // ? repesents optional parameter and it returns a string
// console.log(joined);

// another method => spilt but for strings only and returns a array spilted according to parameter passed
const message = 'This is my first message';
const parts = message.split(' ');
// console.log(parts);

const combined = parts.join('-');
// console.log(combined);

// This technique is particular useful when building a URL slug.









// Sorting Arrays
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// Sort method => work when we have numbers but whenwe have objects it doesn't work we have to do some extra work

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'},
]


// this sort method optionally takes an argument and that's a function that is used for comparison.


// courses.sort(function(a,b) {
//     // a < b => -1
//     // a > b => 1
//     // a===b => 0

//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });
// console.log(courses);










// Testing the elements of an array

const numbers = [1,2,3];

// for every element as soon as it finds an element which doesn't match the criteria , it's going to stop searching
// const allPositive = numbers.every(function(value){
//     return value>=0;
// })



//  checks to see if we have at least one element in this array that matches the criteria.
const atLeastOnePositive = numbers.some(function(value){
    return value>=0;
})

console.log(atLeastOnePositive);