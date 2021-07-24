// Introduction to JavaScript prototype:-
// As we know that all objects in JavaScript are instances of Object. A typical object inherits properties from Object.prototype. The Object.prototype object has many built-in methods and properties such as toString(), valueOf(), etc.All objects see the object prototype object changes through prototype chaining unless the properties and methods subject to those changes are overridden further along the prototype chain. This is a very dangerous mechanism to override or extend object behavior.

// JavaScript is a prototype-based language. Whenever we create a function using JavaScript, the JavaScript engine adds a prototype property inside a function. The prototype property is an object where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties. As we have studied in tutorial#27, one way to create an object is by using a function constructor.

function MyDetails(name, job, yearOfBirth){    
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
console.log(MyDetails.prototype)
// Output:-
// The prototype object includes many properties and methods. Here is the explanation of a few prototype object methods.

// Methods and Description: 
// hasOwnProperty(): It will return a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
// isPrototypeOf(): It will return a boolean indicating whether the specified object is in the prototype chain of the object, this method is called upon.
// propertyIsEnumerable(): It will return a boolean that indicates whether the specified property is enumerable or not.
// toLocaleString(): It will return the string in the local format.
// toString(): It will return the string.
// valueOf() :It will return the primitive value of the specified object.
// Use of Prototype:-
// JavaScript is using the prototype object in two things. First, one is to find properties and methods of an object, and the other is to implement inheritance in JavaScript. Here is an example:
function Student() {
this.name = 'Harry';
this.gender = 'Male';
}
Student.prototype.sayHi = function(){
console.log("Hello World!");
};
let std = new Student();
std.toString();
// In the above code, the JavaScript engine checks whether the toString() method is attached to std or not. If it does not find there, it uses std _proto__ link, which points to the prototype object of Student function. If it still cannot find it there, then it goes up in the hierarchy and check the prototype object of Object function because all the objects are derived from Object in JavaScript, and look for the toString() method. Thus, it finds the toString() method in the prototype object of Object function and so we can call std.toString().

// Summary:-
// This tutorial has covered JavaScript object prototypes, the prototype property, and how it can add methods to constructors, and other related topics. In the next tutorial, we will look at how we can implement inheritance functionality in JavaScript.


console.log("This is tutorial 28");
// prototype means ye hai ki kahe se chalu karke maine isko bnaya
// isko enhance karne ke liye pehle se function bna hua hai bas aapko use karna tha

// Object literal : Object.prototype
// object literal object.prototype ka use karke object bnaya isko aur bhi function
// object literal me object ka prototype pehle se bana hua uska use karke aap isko sahi kar sakte hai
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}
// aap jab object bnaye object literal ki madat se to object prototype tha

function Obj(givenName){
    this.name = givenName
}
let obj1 = new Obj("Rohan Das");
console.log(obj1);
// constructor ki help se bante hai to uska ek aapna prototype hoga
// kaha se start karke ye aap bna rahe hai ye batata hai
// constructor ki help se aap ek new prototype bante hai aur wo default prototype ko inherit karta hai
// prototype ki chain ho jaata isme ye prototype ek aapna bna diya usme object aur constructor ka prototype hai aur usme aapna protype bhi add kar sakte bas wo constructor ke object ko prototype me aapna function add karke
Obj.prototype.getName = function (){
    return this.name;
}
// Obj.getName();
// ye prototype me add hogya
// maanlo aap bahut sara utility function likhna chahte aur aap chahte ho ki aapke object ke attribute me change naa ho to aap ek prototype bna lete hai uska ki koi change naa means usko ek prototype bandete hai ki aap uske help se bna se object aur usme change karne par koi change bhi nhi hoga name me

// aapna bna hua me hi  prtottype me hi edit kare nhi to wo global ho jaata hai change 


Obj.prototype.setName = function (newName){
  this.name = newName;
}
// ye aap se ek name lega aur set kardega new name obj me

let obj2 = new Obj("Rohan Das");
console.log(obj2);
