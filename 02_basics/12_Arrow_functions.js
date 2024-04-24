const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

// const course = courses.find(function(course){
//     return course.name === 'a'
// });





// Arrow function
// whenever you want to pass a functions , as a callback function or as an argument for a different method , you can use the arrow function syntax.
const course = courses.find((course) => {
    return course.name === 'a'
});

// arrow function if u have only one parameter
// const course = courses.find(course => {
//     return course.name === 'a'
// });

// arrow function if u have only one line which is returning a single value
// const course = courses.find(course => course.name === 'a');



console.log(course);