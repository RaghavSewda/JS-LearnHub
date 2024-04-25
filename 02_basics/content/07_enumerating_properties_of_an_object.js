const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key,circle[key]);
}
// simplest way to enumerate properties of an object -> for in loop

// for(let key of circle){
//     console.log(key);
// }
// error object is not iterable

for (let key of Object.keys(circle)){
    console.log(key);
}
// another way -> Object.keys()

for (let entry of Object.entries(circle)){
    console.log(entry);
}

if ('radius' in circle) console.log('yes');
// to check if a give property exist in an object or not -> in operator