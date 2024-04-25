const numbers = [1, 2, 3, 4];

console.log(includoos(numbers,0));

function includoos(array,searchElement)
{
    for (let key of array)
    {
        if(key === searchElement) return true;
    }
    return false;
}