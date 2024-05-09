const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    },1000);
})

promiseOne.then(function() {
    console.log('Promise consumed');
})







const promiseTwo = new Promise (function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 is complete');
        resolve();
    },1000);
}).then (function() {
    console.log('Async 2 consumed');
})






const promiseThree = new Promise (function(resolve,reject) {
    setTimeout(function() {
        resolve({username: 'hey', email: 'me@example.com'})
    },1000);
})

promiseThree.then(function(user) {
    console.log(user);

});






const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'raghav', password: 123});
        }
        else{reject('Error: Something went wrong')}
    },1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
})





const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javascript', password: 123});
        }
        else{reject('Error: JS went wrong')}
    },1000);
});






async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}

consumePromiseFive();








// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/RaghavSewda');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ' + error);
//     }
// }

// getAllUser();






fetch('https://api.github.com/users/RaghavSewda').then(function(response){
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})