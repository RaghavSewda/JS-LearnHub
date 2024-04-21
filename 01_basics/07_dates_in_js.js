let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let newDate = new Date(2023, 0, 23)
// let newDate = new Date(2023, 0, 23,5,3)
let newDate = new Date("01-14-2023")
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let nDate = new Date()
// console.log(nDate);
// console.log(nDate.getDay());
// console.log(nDate.getMonth() + 1);
// console.log(nDate.toLocaleString());

// ${newDate.getDate()} and the time

nDate.toLocaleString('default', {weekday: 'long',})