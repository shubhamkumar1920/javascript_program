console.log("This is tutorial 48");
// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols
    // character sets

// const regex = /^h/i;

// Character Sets - We use []
// iske under jo likhayege usme se hi match hona chhiye
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
// yaha caret symbol ^ ye wala means cannot
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
// multi character sets
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want
// str = "hirry9 bhai"
// isme i capital se ya small se check karega phir wo y ya u ya 0se 9  me se koi phir likha hai 0se9 me se koi match karega tab hi

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times
// isme ek bhi r nhi to match ek rahega tab bhi match aur 2 ho to bhi aur agar 3 hua to match nhi hoga

// Groupings  - We use paranthesis for groupings ()
// isme grouping har 2 baar occur karne ke liye 
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harrry bhai"
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Sets:-
// For instance, [aeio] means any of the 4 characters: 'a', 'e' , 'i', or 'o'. That is called a set. Sets can be used in a regular expressions along with regular characters:

// Ranges:-
// Square brackets may also contain character ranges. For instance, [a-z] is a character in range from a to z, and [0-9] is a digit from 0 to 9.

// Excluding ranges:-
// Besides normal ranges, there are "excluding" ranges that look like [^…]. They are denoted by a caret character ^ at the start and match any character except the given ones.

// For Example:

// [^aeiou] – any character except 'a', 'e', 'i' 'o' or'u'.
// [^0-5] – any character except a digit, the same as \D.
// [^\s] – any non-space character, same as \S.
// The following are the some common character set example.

// [abcdef]:-

// This expression will find any character between the brackets. Here is an example:

// Do a global search for the characters "D" and "o" in a string:

// let reg = /[Do]/gi;
// let str = "Do I Know You?";
// [^abcdef]:-

// This expression will find any character NOT between the brackets. Here is an example:

// Do a global search for characters that are NOT inside the brackets [abc]:

// let str = "Is this all there is?";
// let reg = /[^abc]/g;
// [0-9]:-

// This expression will find any character between the brackets (any digit). Here is an example:

// Do a global search for the numbers 1, 2, 3,4 and 5 in a string:

// let str = "123456789";
// let reg = /[1-5]/g;
// [^0-9]:-

// This expression will find any character NOT between the brackets (any non-digit).Here is an example:

// Do a global search for the numbers that are NOT 1 to 5 in a string.

// let str = "123456789";
// let reg = /[^1-5]/g;
// (a|b):-

// This expression will find any of the alternatives specified. Here is an example:

// Do a global search to find any of the specified alternatives (0|3|2):

// let str = "01234567890123456789";
// let reg = /(0|3|2)/g;
//  Quantifier:-
// Quantifier matches a number of instances of a character, group, or character class in a string. It is appended to a character and specifies how many characters we need. Following is the table of quantifiers, along with its description.

// Quantifier                                     Description

// *                                          It matches zero or more times.

// +                                          It matches one or more times.

// ?                                          It matches zero or one time.

// { x }                                      It matches exactly x times.

// {x ,}                                      It matches at least x times.

// { x, y }                                  It matches from x to y times.

