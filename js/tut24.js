// The JavaScript Math Object:-
// The Math object is used to perform mathematical tasks. It is a built-in static object, so we do not need to instantiate it. We can access all its properties and methods directly. Math object works with the Number type. Unlike many other global objects, Math is not a constructor. We refer to the constant pi as Math.PI and we call the cos function as Math.cos(x), where x is the method's argument.

// Note: Different browsers can give a different result. Even the same JavaScript engine on a different OS or architecture can give different results!

// JavaScript Math Methods:-
// Let's see the list of JavaScript Math methods with descriptions.

// Methods                             Description

// abs()                             It will return the absolute value of the given number.

// acos()                             It will return the arccosine of the given number in radians.

// asin()                             It will return the arcsine of the given number in radians.

// atan()                             It will return the arc-tangent of the given number in radians.

// cbrt()                             It will return the cube root of the given number.

// ceil()                          It will return a smallest integer value, greater than or equal to the given number.
 
// cos()                           It will return the cosine of the given number.

// cosh()                               It will return the hyperbolic cosine of the given number.

// exp()                           It will return the exponential form of the given number.

// floor()                          It will return the largest integer value, lower than or equal to the given number.

// hypot()                                 It will return the square root of sum of the squares of given numbers.

// log()                                             It will return the natural logarithm of a number.

// max()                    It will return the maximum value of the given numbers.

// min()                    It will return the minimum value of the given numbers.

// pow()                    It will return the value of base to the power of exponent.

// random()                    It will return the random number between 0 (inclusive) and 1 (exclusive).

// round()                    It will return the closest integer value of the given number.

// sin()                       It will return the sine of the given number.

// sinh()                    It will return the hyperbolic sine of the given number.

// sqrt()                    It will return the square root of the given number

// tan()                           It will return the tangent of the given number.

// tanh()                           It will return the hyperbolic tangent of the given number.

// trunc()                           It will return an integer part of the given number.

// Converting between degrees and radians:-

// The trigonometric functions such as sin(), cos(),tan() expect angles in radians.

// Since humans tend to think in degrees, and some functions can accept degrees, it is good to keep functions handy that convert between the two. Here is an example:

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};
function radToDeg(rad) {
  return rad / (Math.PI / 180);
};
// Key Takeaways:-
// The math object is one of the most important features in JavaScript, as it provides various properties and methods which can perform mathematical operations. We can use mathematical constants such as PI and Log values using the properties provided by Math object such as Math.PI. In addition to the above, we can also invoke the methods provided by Math object such as abs(), ceil(), etc. to perform various mathematical operations on multiple variables.

console.log("Welcome to tutorial 24");

let today = new Date();
// it will create a
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// it will set date 
// otherDate = new Date('June 13 1976');
// next format
// otherDate = new Date('09/16/1976');
// next format
console.log(otherDate);
let a;
a = otherDate.getDay();
// its return the current day in a week  its start from 0
a = otherDate.getDate();
// its give a date 
a = otherDate.getMinutes();
// its give the min
// a = otherDate.getSeconds();
// its give the second
// a = otherDate.getHours();
// its give the hour
a = otherDate.getTime();
// its give the time in seconds from 1 january
a = otherDate.getMilliseconds();
// its give the time in miliseconds from 1 january
a = otherDate.getMonth();
// it return the month its start from 0

console.log(a);
otherDate.setDate(23);
// it will set the date 
otherDate.setMonth(0);
// it will set the month
otherDate.setFullYear(1900);
// it will set the year
otherDate.setMinutes(2);
// it will set the min 
otherDate.setHours(1);
// it will set the hours
otherDate.setSeconds(3);
// it will set the seconds
console.log(otherDate);

