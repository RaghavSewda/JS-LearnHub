
// title
// body
// author
// views
// comments -> (author,body)
// isLive -> (boolean)

// create a object

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 6200,
//     comments: [
//         { author: 'a',body: 'b'},
//         { author: 'c',body: 'd'},
//     ],
//     isLive: true,
// };

// for a user who is writing a post not posted yet
function Post(title,body,author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a','b','c');
console.log(post);