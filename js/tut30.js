// Inheritance:-
// Inheritance let the objects to share each other's properties. In other words, Inheritance is the process by which one object can be based on another.

// Prototype Inheritance:
// When we try to access a property or any object's method, the JavaScript will first search on the object itself, and then it will search the object's prototype if not found. If, after checking both the object and its prototype still no match is found, JavaScript will check the linked object prototype and continue searching until the end of the prototype chain is reached. Object.prototype is at the end of the prototype chain. All the objects inherit the properties and methods of Object. When we try to search beyond the end of the chain, results in null. There are different ways to create an object in JavaScript. 

// Object literal
// Function constructor
// The create() method
// We have already discussed the object literal and function constructor in tutorial#27. Today we will discuss object.create() method.

// Object.create():-
// The Object.create() method using an existing object as the prototype, creates a new object. The syntax is:

// Object.create(proto, [propertiesObject])
// Here is an example:

const myDetail= {
  isHuman: true,
  printIntro: function() {
  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
}};
const myself = Object.create(myDetail);
myself.name = 'Harry'; // "name" is a property set on "me", but not on "person"
myself.printIntro();
// expected output: "My name is Harry. Am I human? true"
// To create inheritance between function constructors, call the parent constructor using call or link the prototype of the child constructor to the parent constructor prototype.

// Using call to chain constructors for an object:-
// The call() allows the method or function belonging to one object to be assigned and called for another object.This method provides a new value of this to the method or function. With call(), we can write a method once and then inherit it in another object without rewriting the new object's method.

// For example, the constructor for the Factory object is defined with two parameters: name and location. Other functions, Food, invoke Factory, passing this, name, and location. Factory initializes the property's name and location; the specialized functions define the category.

function Factory (name, location) {
  this.name = name;
  this.location = location;
}
function Food(name, location) {
 Factory.call(this, name, location);
 this.category = 'food';
}
const myFood = new Food('Nestle', 'UK' );
// Manually set the constructor:-
// The constructor property is used to return a reference to the object constructor function that created the instance object. We mostly use this property to define a function-constructor function by calling it with a new and prototype-inherits chain. Here is a simple example of how to set the constructor manually:

function Factory() { 
/* ... */
 }
Factory.prototype.FactoryMethod = function FactoryMethod() {}
function Product1() {
   Factory.call(this) 
}
Product1.prototype.constructor = Product1



console.log("This is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
// 1st method
let harry = Object.create(proto);
// ye ek prototype ban deta hai new prototype
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// ye harry object prtotype jo harry object se bna hai uske function use karke name change kar raha hai
// console.log(harry)
// harry ko ek object maaan kar uska prototype bna deta hai
// This also creates harry object
// 2nd method
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
}); 
// ye value name me set ho jaata hai par ye change nhi hoga jab tak writable likha naaa ho is method me
harry1.changeName("Harry2")
console.log(harry1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}
// ye ek new prototype create kar rahe hai slogan naam se 

// Create an object from this constructor now
// let harryObj = new Employee("Harry", 345099, 87);
// console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    // ye upar constructor ko inherit kar raha hai 
    // ye constructor ke liye ye employee se name salary experience leta hai
    // par Employee me jo humlog prototype create kiya tha wo nhi aaya hai
    this.language = language;

}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);
// yaha employee ka prototype inherit nhi hua tha isko manually kiya humne
// programmer ka jo prototype hai naa wo kardo employee ke prototype ke barabar

// Manually set the constructor
Programmer.prototype.constructor = Programmer;
// yaha constructor bhi nhi tha usko bhi manually kiya
// ye humlog programmer me constructor manually set kar rahe hai inheritance acheive karne ke liye

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);
