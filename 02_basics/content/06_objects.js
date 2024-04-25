// Functions are objects

function Circle (radius) {
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}
const another = new circle(1);


// Functions are objects
// circle.name
// circle.length
// console.log(circle.constructor) => returns Function

// const Circle1 = new Function('radius',`
// this.radius = radius,
// this.draw = function(){
//     console.log('draw');
// }
// `);
// const circle = new Circle1(1);


// Methods available in functions
// Circle.call({},1);    //same as line 9
// Circle.apply({},[1,2,3]) // same but arguments can be passed as an array.


// Takeaway -> "Functions are objects"