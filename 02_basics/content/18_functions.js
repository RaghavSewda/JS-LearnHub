
const color = 'red'; // -> global scope => should avoid declaring global coz everyone can access it which can lead to all kind of bugs and issues in our programs
function start()
{
    const message = 'hi';
    const color = 'blue';
    if (true)
    {
        const another = 'bye';
    }
    // console.log(another);    -> error

    for (let i = 0; i<5; i++)
    {
        console.log(i);
    }
    // console.log(i);  -> error
    console.log(color);
}

function stop()
{
    const message = 'bye';  // => allowed
}
// console.log(message);    -> error
start();






// Var keyword  =>  When you declare a variable with var. It's scope, is not limited to the block in which it's defined. It's limited to the function in which it's defined , and this is not how most or all programming languages work. So before ES6, var was the only way to declare variables in constants.

// var -> function-scoped
// ES6 (ES2015): let, const -> block-scoped

function start() {
    for (var i = 0; i<5 ; i++)
    {
        console.log(i);
    }
    console.log(i);
}



var colour = 'red'; // this creates a global variable and attaches that global variable to the window object in the browser.
let age = 30;   // not attached to window object
// avoid adding stuff to the window object coz it can create issues
