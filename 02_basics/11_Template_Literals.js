// const message =
// 'This is my\n' +
// '\'first\' message';
// looks to ugly and noisy

// Object {}
// Boolean true, false
// String '',""
// From es6-> Template Literals => ``(back tick character)
//  We can format the string exactly the way we want it to look like.
const another = `This is my
'first' message`;

// console.log(another);


// We can add placeholders also
const name = 'Raghav'

const another1 = 
`Hi ${name} ${2+3}`;
console.log(another1);