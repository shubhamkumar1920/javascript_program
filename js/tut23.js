// Date Object:-
// The Date object is a built-in datatype into the JavaScript language. The Date object is used to deal with dates and times in JavaScript. Once a Date object is created, many methods allow us to operate on it. Most methods allow us to get and set the month, day, year, hour, minute, and second using either local time or universal time. There are four ways of instantiating a date:

let d = new Date();
let d = new Date(milliseconds);
let d = new Date(dateString);
let d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// Here is an example:-

let mydate = new Date();
mydate.setHours(0);
alert(mydate); 
mydate.setHours(0, 0, 0, 0);
alert(mydate); 
// There are many methods available to obtain a date in various formats and perform time zone conversions. There are methods to read and alter individual components of the local date and time, such as getDay() and setHours(). Versions of the same methods also exist to read and manipulate UTC's date and time, such as getUTCDay() and setUTCHours(). Here is the list of some of the data object methods:

// Date Object Methods

// Method                        Description

// getDate()                   It will return the day of the month (from 1-31)

// getDay()                    It will return the day of the week (from 0-6)

// getFullYear()               It will return the year

// getHours()                  It will return the hour (from 0-23)

// getMilliseconds()           It will return the milliseconds (from 0-999)

// getMinutes()                It will return the minutes (from 0-59)

// getMonth()                  It will return the month (from 0-11)

// getSeconds()                It will return the seconds (from 0-59)

// getTime()                   It will return the number of milliseconds since midnight Jan 1 1970, and a specified date

// getTimezoneOffset()         It will return the time difference between UTC time and local time, in minutes

// getUTCDate()                It will return the day of the month, according to universal time (from 1-31)

// getUTCHours()               It will return the hour, according to universal time (from 0-23)

// getUTCMilliseconds()        It will return the milliseconds, according to universal time (from 0-999)

// getUTCMinutes()             It will return the minutes, according to universal time (from 0-59)

// getUTCMonth()               It will return the month, according to universal time (from 0-11)

// getUTCSeconds()             It will return the seconds, according to universal time (from 0-59)

// setDate()                   It will set the day of the month of a date object

// setFullYear()                   It will set the year of a date object

// setHours()                  It will set the hour of a date object

// setMilliseconds()                   It will set the milliseconds of a date object

// setMinutes()                    It will set the minutes of a date object

// setMonth()                  It will set the month of a date object

// setUTCHours()                   It will set the hour of a date object, according to universal time

// toDateString()                  It will convert the date portion of a Date object into a readable string

// toLocaleString()                            It will convert a Date object to a string, using locale conventions

// toString()                          It will convert a Date object to a string

// toTimeString()                          It will convert the time portion of a Date object to a string

// toUTCString()                           It will convert a Date object to a string, according to universal time

// UTC()                           It will return the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

// valueOf()                           It will return the primitive value of a Date object

// Conclusion
// In this tutorial, we learned how to create an instance of the Date object and use its built-in methods. It is very important to know how to work with dates is essential for many common tasks in JavaScript, as this can enable us to do many things from setting up a repeating report to displaying dates and schedules in the correct time zone.

 console.log("Welcome to tutorial number 23");
let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;

// Exploring the Math object
z = Math;
// ye math ka function batata hai
z = Math.PI;
// ye pi ka value batata hai
z = Math.E;
// ye e ka value
z = Math.round(5.4);
// math ka round figure deta hai
z = Math.ceil(5.3);
// ye math ka ceil value means max ko that number
z = Math.floor(-5.3);
// ye math ka minimum value deta hai
z = Math.abs(5);
// ye math ka absolute value deta hai
z = Math.sqrt(64);
// ye number ka root nikal deta hai 
z = Math.pow(2, 3);
// ye us no ka power ka value deta hai
z = Math.min(2, 3, 34,234, 2342,34);
// ye isme minmum no nikal ke de diya 
z = Math.max(2, 3, 34,234,34);
// ye maximum nikal ke de diya
z = Math.random();
// ye 0 aur 1 ke between random no deta hai
z = 100*Math.random()
// aap ye 100 se 0 ke bich me random dega
z = Math.ceil(50 + (100-50)*Math.random())
// ye 50 se 100 ke biche me random dega
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

console.log(z);

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3