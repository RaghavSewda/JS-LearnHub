const numbers = [1,2,3,4];

const output = move(numbers,1,-2);

console.log(output);

function move(array,index,offset)
{
    const pos = index + offset;
    if (pos >= array.length || pos < 0)
    {
        console.error('Invalid offset.');
        return;
    }

    const ans = [...array];
    const element = ans.splice(index,1)[0];
    ans.splice(pos,0,element);
    return ans;
}