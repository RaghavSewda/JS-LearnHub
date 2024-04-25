

// Filtering an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);

// this method will loop through this array, and execute the callback funtion for each element. Now if the element matches the criteria, it will add this element to a new array, and finally we can get the new array here






// Mapping an array => to map each element in an array into something else. in this example, you are mapping these numbers to string, but you can also map them to objects , let me

// const items = filtered.map( n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join(' ') + '</ul>';
// console.log(html);



// another example => very useful for building real world applications  -> mapped each number to an object with a value property
// const items = filtered.map(n => {
//     const obj = {value: n};
//     return obj;
// })

// console.log(items);


// both filter and map methods return a new array without modifying orginal one. 
// So these methods are chainable but put each method call on a different line

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({ value: n}));

// we can again can filter or the map method
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);







// Reducing an Array

let sum = 0;
// a = 0; c = 1 => a = 1
// a = 1; c = -1 => a = 0
// a = 0; c = 2 => a = 2
// a = 2; c = 3 => a = 5
sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
sum = numbers.reduce(
    (accumulator,currentValue) => accumulator + currentValue
);

console.log(sum);