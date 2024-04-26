
// this is not a preferred approach
// so dont use this approach

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title,tag);
//         });
//     }
// };

// video.showTags();




// another approach
function playVideo() {
    console.log(this);
}

playVideo.call({name: 'Raghav'});
playVideo.apply({name: 'Raghav'});
// what we pass in argument here will be used as the value of 'this'. difference between call and apply is only about passing arguments.
// so if we have multiple parameters in playVideo function lets say a and b . we can simply write a,b after the object in call but in apply we have to pass as an array that the only difference.


const fn = playVideo.bind({name: 'Raghav'}); 
fn();
// this dont point to playVidio functino instead it returns the new video which always always point to this object 


playVideo();






// second solution
// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title,tag);
//         }.bind(this));
//     }
// };

// video.showTags();




// Starting for ECMA script 6, we have arrow function. They inherit 'this' value

// thrid approach => Modern and best
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title,tag);
        });
    }
};

video.showTags();
