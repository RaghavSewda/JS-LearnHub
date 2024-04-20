// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log('2' > 1);
// console.log('02' > 1);

console.log(null > 0);  // The reason is that an equality check (==) and
console.log(null == 0); // comarisons > < >= <= work differently.
console.log(null >= 0); // comparisons convert null to a number, treating it as 0.


// strict check ===
// check data type as well
// console.log("2" === 2)