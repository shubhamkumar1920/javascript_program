console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
// ye g and i flag hai ye pura line me search karta nhi lagaoge to pehla match mil jaayega to return ho jaaayega
// reg = /harry/i; // i means case insensitive
// ye i means harry ka koi bhi letter chota baara hai to match ho jaayega chota baara se matlab nhi hai
// aur ye jo match hoga wo return karega HarRy jaise agar regular expression me match ke liye harry raha to

// console.log(reg);
// console.log(reg.source);
// to slas hata ke print hoga

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// ye harry ko array ke sath uska index bhi batata hai ki index 24 par harry hai
// result = reg.exec(s);
// console.log(result);
// ye 39 index return kiya
// result = reg.exec(s);
// console.log(result); ---> We can use multiple exec with global flag
// ye null return kiya agar me global nhi likhta to har bar 24 hi return karta

// if (result) {
//     console.log(result);
// ye array return karta hai
//     console.log(result.input);
// ye input return karta hai jo s me hai 
//     console.log(result.index);
// ye jo match hua uska index return hoga wo dikayega
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"
// ye return karta hai ki ye hai ki nhi


// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
// isme s pehle aayega aur reg under aayega means line me se word search hoga
// ye array return kardiya ye case sensitive hai
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// ye index return karta hai wo word ka line se agar match nhi mila to -1 return krdeta hai
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
// ye jaaha harry milega wo shubham se replace kardega 
console.log(result5);





// Regular Expressions Methods:-
// Regular expressions are used with the RegExp methods like test() and exec() and with the string methods match() , replace() , search() , and split() . These methods are explained in detail below with examples.

// exec():-
// This method will executes a search for a match in a string. It returns an array of information or null on a mismatch. Here is an example:

let obj = /h/.exec("Code with harry");
// test():-
// This method tests for a match in a string. It returns true or false. Here is an example:

let str = /Code/;
str.test("Code with harry!");
// match():-
// This method will return an array containing all of the matches, including capturing groups, or null if no match is found. Here is an example:

  let str = "JavaScipt tutorial from begineer to advance level"; 
  let result = str.match(/ial/);
// search():-
// This method will tests for a match in a string. It returns the index of the match, or -1 if the search fails. Here is an example:

let str = 'Code with harry';
let reg = /od/;
// search if the pattern is in string variable
let result = str.search(reg);
console.log(result); 
// replace():-
// This method will executes a search for a match in a string, and replaces the matched substring with a replacement substring. Here is an example:

let str = "Code with abc!";
let result = str.replace("abc", "Harry");
// split():-
// This method uses a regular expression or a fixed string to break a string into an array of substrings. Here is an example:

// splitting strings into array elements
const test = /[\s,]+/;
let res = 'Hello world! '.split(re);
console.log(result); // ["I", "am", "learning", "JavaScript", "RegEx"]