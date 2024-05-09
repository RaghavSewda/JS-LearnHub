fetch('https://api.github.com/users/RaghavSewda').then(function(response){
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})