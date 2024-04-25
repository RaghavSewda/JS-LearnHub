const numbers = arrayFromRange(-10,-15);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (i = min; i<=max; i++)
    {
        output.push(i);
    }
    return output;
}