// let firstName = 'Dabeer              '
// let lastName = 'Ahmed        '
// console.log(firstName.truelength)




const myHeros = ['thor', 'spiderman'];

const heroPower = {
    thor: 'hammer',
    spiderman: 'sling'
};

// Adding a method to Object prototype
Object.prototype.dabeer = function() {
    console.log('Dabeer is present in all objects');
};

// This works because both are objects
heroPower.dabeer();  // Output: Dabeer is present in all objects
myHeros.dabeer();    // Output: Dabeer is present in all objects (because we know that if we define a method in an object and as we know that everything in javascript is an object so whenever we call it anything like array, function etc we will have the access of this method)

// Adding a method to Array prototype
Array.prototype.heyDabeer = function() {
    console.log('Dabeer says hello');
};

// This works because myHeros is an array
myHeros.heyDabeer();  // Output: Dabeer says hello

// This throws an error because heroPower is not an array
// heroPower.heyDabeer();  // Error: heroPower.heyDabeer is not a function (because we have defined this method in an array and it will only be accessable in array and not in other)



// ***********************************Inheritance*********************************************
/*
Prototypal inheritance is a JavaScript feature that allows objects to inherit properties and 
methods from other objects. Instead of using classes like in traditional OOP languages, JavaScript 
uses prototypes. When a property or method is accessed on an object, the JavaScript engine looks up 
the prototype chain until it finds the property or reaches the end of the chain (i.e., null).
*/


const user = {
    name: "dabeer-db",
    email: "dabeer@db.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const TAsupport = {
    makeAssignment: "make js assignment",
    fulltime: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(teachingSupport, Teacher) // This is just a modern syntax but does the same thing





// *************************Practise*************************************

let myUsername = "DabeerAhmed               "
// console.log(myUsername.length) //  Answer => 26

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`Truelength is ${this.trim().length}`)
}

myUsername.trueLength() //  Answer => 11
"Dabeer".trueLength() //  Answer => 6
"Ahmed    ".trueLength() //  Answer => 5