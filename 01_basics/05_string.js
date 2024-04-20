const name = 'Raghav'
const repoCount = 5

// console.log(name + repoCount + " Value");
// old method


// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)
// modern method and readable

const gameName = new String('raghav-rs-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = '       Raghav       '
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = 'https://raghav.com/raghav%21sewda'
// console.log(url.replace('%21','-'))
// console.log(url.includes('raghav'))

// console.log(gameName.split('-'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim