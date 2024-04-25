const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array)
{
    if (array.length === 0 ) return undefined;

    return array.reduce((a,b) =>  (b > a) ? b : a);
}


// anytime you have a array of value and you need a value by iterating that array , think of the reduce method.