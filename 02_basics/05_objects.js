// Noraml way

// const circle = {
//     radius: 1,
//     locaton: {
//         x: 1,
//         y: 1,
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// Factory Function to define a object
function createCircle(radius) {
    return {
        radius,//modern JS
        draw: function() {
            console.log('draw');
        },
        //Modern JS
        open() {
            console.log('open');
        }
    };
}
const circle1 = createCircle(1);
// constructor -> built in constructor

// Constructor Functon to define a object
function Circle(radius) {
    this.radius = radius,
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new Circle(1);
// constructor -> we used to constructor


// Dynamic Nature of Objects

// const circle = {
//     radius: 1,
// };

// circle.color = 'yellow';
// circle.draw = function() {
//     console.log('draw')
// }

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// every object has a constructor property that references the function that was used to construct that object.