// type conversion and type coercion and string manipulation

console.log('Welcome to tut5');
let myVar;
myVar=String(34);
console.log(myVar, (typeof myVar));
// number is converting to string
let  booleanVar=String(true);
// let  booleanVar=true;
// console.log(booleanVar, (typeof booleanVar));
console.log(booleanVar, (typeof booleanVar));

let date= String(new Date());
console.log(date ,(typeof date));
// object ko bhi aap string me change kar sakte hai

let arr1=String([1,2,3,4,5]);
let arr=[1,2,3,4,5];
console.log(arr.length, (typeof arr));
console.log(arr1.length, (typeof arr1));
// array ka under object ka length 
// array ko string me type cast kiye to 4 bracket and 5 element

let i=8;
console.log(i.toString());
// number ko string me change karne ke liye to string use karte hai

// string ko number me typecast kare hai
let stri=Number('3434');
console.log(stri, (typeof stri));

// boolean ko agar change karte hai to 0 ya 1 deta hai output agar usko number me typecast karte hai to
let strin=Number(true);
console.log(strin ,(typeof strin));

// agar input me sirf ko charcter aa jata hai Nan mean not a number print hoga

// let s=Number('34e3'); isme e ka matlab 34*(10^3 ye 3 change hote rahega jo dalega wo hoga)
// let s=Number('343d3');
let s=Number([1,2,3,4,5,6,7]);
console.log(s, (typeof s));

// let number=parseInt('34');
// let number=parseFloat('34.098');
let number= Number('34');
console.log(number, (typeof number));

// to fixed aapko kitna decimal dekhna hai ye dikhata hai isme aap jitna dekhna chahte hai likh sakte hai
console.log(number.toFixed(2),(typeof number));

// type coercion
let mystr="shubham";
// mystr='343';
let mynum=34;
console.log(mystr + mynum);
// isme hota ye hai ki dono ko ek hi me print kardeta hai like shubham34 this.