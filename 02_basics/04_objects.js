// the objects which are created from constructors are singleton objects and the objects which are created with literals are non-singleton objects. there is no such difference in singleton and non-singleton objects.

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dabeer",
            lastname: "Ahmed"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const user = [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
]

// console.log(user[1].email)


// console.log(tinderUser);
// console.log(Object.keys(obj1));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLoggedOut'))

// ********************Object destructuring ***********************

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor)


// ************************Json format***********************

// {
//     "name":"dabeer ahmed",
//     "designation": "engineer",
//     "job_type" : "full time"
// }

// [
//     {},
//     {},
//     {}
// ]