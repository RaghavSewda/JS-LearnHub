const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Old way
// const another = {};
// for (let key in circle){
//     another[key] = circle[key];
// }


// ****Object.assign() copies the properties and methods from 1 or more source objects into a target object, we can use that to clone an object, or combine multiple objects into a single object****
// const another = Object.assign({},circle);
// better way in modern JS
// target object that we pass here doesn't have to be an empty , it can be an existing object , it can have one or more properties or method.



// Spread operator for simplest way 
const another = { ...circle};
console.log(another);
// It is used to spread an object, which basically means getting all it's properties and methods and putting them into another object.