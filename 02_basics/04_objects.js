// const tinderUser = new Object() Singleton Object
const tinderUser = {} // non singleton object


tinderUser.id = '123abc';
tinderUser.name = 'Raghav';
tinderUser.isLoggedIn = false; 

// console.log(tinderUser);

const regularUser = {
    email: 'some@google.com',
    fullname: {
        userfullname: {
            firstname: 'Raghav',
            lastname: 'Sewda'
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}
const obj4 = {
    5: 'a',
    6: 'b'
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2, obj4);

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: 'rs@google.com'
    },
    {
        id: 1,
        email: 'rs@google.com'
    },
    {
        id: 1,
        email: 'rs@google.com'
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: 'xy',
    price: '0',
    courseInstructor: 'Raghav'
}

// course.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
// console.log(instructor);


//for React
// const navbar = ({company}) => {

// }
// navbar(company = 'raghav')

//JSON
// {
//     'name': 'raghav',
//     'coursename': 'xy',
//     'price': 'free'
// }

// [
//     {},
//     {},
//     {}
// ]