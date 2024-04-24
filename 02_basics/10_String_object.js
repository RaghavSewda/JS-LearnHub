// String primitive
const message = 'This is my first message';
console.log(typeof message);
// String object
const another = new String('hi');
console.log(typeof another);

// mdn docs for string object

// message.length
// message[0]
// message.includes('my')
// message.startsWith('This')
// message.endsWith('e')
// message.indexOf('my')
// message.replace('first','second') does not modify the original one
// message.toUpperCase() returns a new string
// message.toLowerCase
// message.trim() removes all spaces before and after
// message.trimLeft() and message.trimRight()
// message.split() with this we can spilt a string based on a given character.

// Escape notation
//      \'  =>  single quote
//      \"  =>  double quote
//      \n  =>  new line
//      \0  =>  the NULL character
//      \\  =>  backslash