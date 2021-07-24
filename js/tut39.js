// What is a Promise?
// A promise in JavaScript is similar to a promises we do in real life. When we make a promise, it is a guarantee that in future, we are going to do something. A promise has two possible outcomes: it will be kept when the time comes, or it will not. Similarly, in JavaScript, when we define a promise, either it will be resolved when the time comes, or it will get rejected. According to MDN, “the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.”

// A promise has three states:

// pending: It is the initial state.
// Fulfilled: It indicates that the promised operation was successful.
// Rejected: It indicates that the promised operation was unsuccessful.
 
// The constructor syntax for a promise object is:

let myPromise = new Promise(function(resolve, reject) {
// code here
});
// When new Promise is created, the function passed into it runs automatically. It contains the producing code which produces the result. Its arguments resolve and reject. Here is an example of simple promise.

var promise = new Promise(function(resolve, reject) { 
  const x = "geeksforgeeks"; 
  const y = "geeksforgeeks"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } }); 
promise.then(function(){ 
console.log('Success, You are a GEEK');}).catch(function () { 
console.log('Some error has occurred');}); 
// A promise is created using a constructor that takes a call back function with two arguments resolve and reject in line 1. If the task is successful(x===y), the promise is resolved. If the task is unsuccessful(x is not equal to y), then the promise is rejected. The then() method is called if the promise is resolved, and the catch() method is called when the promise is rejected or if an error occurred during the code execution.

// Promises are the ideal choice for asynchronous programming. Promises can handle multiple asynchronous operations easily and are better at error handling as compared to callbacks and events.

// Benefits of Promises:-
// It improves the code readability
// It is better in the handling of asynchronous operations
// It has a better flow of control definition in asynchronous logic
// It is better in error handling
// Wrap Up:-
// So, in this tutorial, we have learned how we create a Promise in JavaScript and use it for the resolved and rejected cases. If you are a beginner, understanding how promises they work might take time.

// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})
// Code tut 39b.js as described/written in the video
console.log("This is tutorial 39");

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
// enroll student me new student bheja gaya to wo promise karta hai ki solve kardege nhi solve hoga to reject kardete agar solve hoga to then wala bhejna agar solve nhi hua to catch wala bhejna ki solve nhi hua
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// agar resolve hua to then chalega nhi to catch chalega
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()