// var h=document.getElementById('hl');
// console.log(h)
// primitive data type 
// string
var names="harry";
console.log("my string is " + names);
console.log("data type is " + (typeof names));

// numbers 
let marks = 34;
console.log("data type is " + (typeof marks));

// boolean
let bool = true;
console.log("data type is " + (typeof bool));

// null
let nullva = null;
console.log("data type is " + (typeof nullva));
// bogus value jhuta value
// iska bogus return value hota ye primitive datatype hota hai

// undefined
let undef=undefined;
console.log("data type is " + (typeof undef));

// reference datatypes

// arrays
myarr=[1,2,3,4,false,"string"];
console.log("data type is "+ (typeof myarr));
// in javascript data type are dynamic in nature it will vary
// in array return type is alwys object if it is number string boolean .... etc
// isme humlog koi bhi primitive datatype object rahega

// object literals

let markss = {
    harry: 89,
    shubham: 36,
    'Rohan Das': 34
}
console.log(markss);
console.log(typeof markss);
// ye object hai ye dictionary jaise use hota hai iske key me space use nhi kar sakte hai agar space use karne ke liye key ko string me karke use kar sakte hai

function findNames() {
    
}
console.log(typeof findNames);
// ye function bol rahega

let date= new Date();
console.log(typeof date);
