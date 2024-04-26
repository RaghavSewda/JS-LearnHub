

// sum(1,2,3,4) => 10
function sum(...args){  // this is rest parameters which puts the all parameters into an array. So, if you pass a array it will make it a array of array
    if(args.length === 1 && Array.isArray(args[0]))
    {
        args = [...args[0]];    // this is spread operator
        // args = args.flat(Infinity);  // this is a flat method of array prototype   
    }

    return args.reduce((a,b) => a+=b);
}

console.log(sum([1,2,3,4,4,5]));