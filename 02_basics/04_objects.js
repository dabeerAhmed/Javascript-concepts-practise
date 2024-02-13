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