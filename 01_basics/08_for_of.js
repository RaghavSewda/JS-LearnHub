const person = {
    name: 'Raghav',
    age: 21
};

for (let key in person){
    console.log(key)
}

//for in to iterate over property of an object

// const colors = ['red', 'green', 'blue'];
// for (let index in colors){
//     console.log(index,colors[index]);
// }

// for-of to iterate over elements of object

const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);
