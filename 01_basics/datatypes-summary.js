// # Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const oustsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 84554564645646464646n



// Reference 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Raghav",
    age: 21,
}

const myFunction = function() {
    console.log('Raghav')
}

// console.log(typeof bigNumber);
// console.log(typeof oustsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3







// Stack (Primitive), Heap (Non-Primitive)

let myName = 'Raghav'

let anotherName = myName
anotherName = 'Sewda'

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "rs@rs.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sr@sr.com"

console.log(userOne.email)
console.log(userTwo.email)
