// this -> references The object that is executing th current function.


// method -> obj
// function -> global (window in browser, global in node)


// method
const video = {
    title: 'a',
    play() {
        // console.log(this);  // this -> video obj
    }
};
// video.play();
video.stop = function() {
    // console.log(this);  // video obj
}


// function
function playVideo(){
    // console.log(this);  // window 
}


// constuctor functions 
function Video(title) {
    this.title = title;
    // console.log(this);
}
const v = new Video('b');   // because when we use new operator create a new empty object {}


// callback function
const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags()  {
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);  //this is representing the window object because we are inside the callback funtion. This function is just a regular function. It's not a method in video2 object.
        },this);    // this 'this' is used to solve the issue   // but not all method in js give you the ability to pass the this argument. So we have a few different solutions for that in next file.
    }
};

video2.showTags();