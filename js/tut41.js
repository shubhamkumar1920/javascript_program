// Here is an example of a multiply function that returns the product of two parameters:

function mul(a, b) {
return a * b
}//calling function
mul(3,3) //returns 9
// What are Arrow Functions? 
// One of the most famous features in modern JavaScript is the arrow function.ES6 arrow functions provide us an alternative way to write a more concise and shorter syntax compared to the traditional function expression. Here is an syntax of arrow functions:

let myfunc = (arg1, arg2, ...argN) => expression

// Let’s see another example of traditional function expression that adds two numbers:

let addition = function(x,y) {
 return x + y;
}
console.log(addition(10,10)); // returns 20
// Now lets see an example of arrow function which is equivalent to the above addition() function expression:

let addition = (x,y) => x + y;
console.log(addition(10,10)); // 20;
// In the above example, the arrow function has only one expression x + y so it returns the result of the expression (10+10=20).

// Here is an another example of arrow functions that will print “ Hello World”:

greet = () => {
   return "Hello World!";
 } 
// If the function has one statement, and the statement returns a value or string, we can remove the brackets and the return keyword:

greet = () => "Hello World!";
// Limitations of Arrow Functions:-
// An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 
// Arrow functions do not have its own bindings to this or super, and should not be used as methods.
// It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions are a powerful addition to ES6, but we have to be careful while using them. There are some places where arrow functions are not usable, and this can cause difficulty for us to track errors, especially if we do not understand how they really work. Arrow functions are the best choice when working with closures or callbacks, but it is not a good choice when working with object methods or constructors.

// Summary:-
// Arrow functions are handy for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression, where at the right side is an expression. The function evaluates the expression and returns the result.
// With curly braces: (...args) => { body }, the brackets allow us to write multiple statements inside the function, but in such scenario, we need an explicit return to return something.


// ARROW FUNCTIONS

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// in arrow function we dont right function in arrow function it is used as function
// const harry = ()=>{
//     console.log("This is the best person ever")
// }
// harry();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// dont need to right return its auto done.
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});
// agar object return kara rahe hai return to parenthesis me dena chhiyye

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;
// ek argument hai to name me pranthesis ki jarurat nhi par ek se jyada hai to chhiye
const greet = (name,ending) =>  "Good Morning " + name + ending;

console.log(greet('Harry'))
