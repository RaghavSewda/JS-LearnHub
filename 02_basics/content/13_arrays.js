// const numbers = [1, 2, 3, 4];


// Removing elements
//End
//pop

//Begining
//shift

//Middle
//splice(starting index,no of elements)



// Emptying an array

// solution 1 
// for let,var (numbers = []) pointing to a new array

// solution 2
// numbers.length = 0; truncate the array   (best)

// solution 3 
// splice(start,length)

// solution 4
// pop method in loop   (not recomended)




// Combining and slicing arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

// concat returns a new array without effecting orginal
// const combined = first.concat(second);


// slice() for slicing
// const slice = combined.slice(2,4); starts from 2 with length 4
// const slice = combined.slice(2); starts from 2 till end
// const slice = combined.slice();  starts from start till end

// if you are dealing with primtive values, it will create a copy , but if you are dealing with object there reference get copied








// Spread operator in ES6

// const combined = [...first, ...second];
// with this we can add elements between and end of an array also
// const combined = [...first, 'a', ...second, 'b'];






// iterating an array
const numbers = [1, 2, 3];

// for (let number of numbers){
//     console.log(number);
// }

// another way -> for each method take a callback function
// numbers.forEach((number,index) => console.log(index,number));
// callback function can take index as a parameter to display index , we dont get index in for of loop





