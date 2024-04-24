
// street
// city 
// zipCode
// showAddress(address)

const address = {
    street: 'a',
    city: 'b',
    zipCode: 110086,
};

function showAddress(address) {
    for (let key of Object.keys(address)){
        console.log(key,address[key]);
    }
}

showAddress(address);