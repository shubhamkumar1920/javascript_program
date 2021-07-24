console.log('This is tutorial 47');

let regex = /harrsdfgy/;
let str = "harry is a good boy and harrsy is code with harrsy"
// Lets look into some metacharacter symbols
regex = /^harr/; // ^ means expression will match if string starts with
// ye isse se start hoga to print nhi to nhi else wala 
regex = /rry$/; // $ at the end of the string means "string ends with"
// ye koi word me rry se end hua to print hua
regex = /h.rry/; //matches any one character
// isme . chor ke sab match hoga to true hoga
regex = /h*rry/; //matches any 0 or more characters
// ye star uske under kitna bhi likh do ya ek bhi naa likho wo match hoga
regex = /ha?rryi?t/; //? after character means that character is optional
// ye koi character ke baad ? lagne par wo optional hota hai agar wo rahega ya nhi rahega wo match hoga
regex = /h\*rry/
// backslas means ye * ek meta character ki tarah samjhega ki optional character nhi

// let str = "h*rry means codewith"; // 

let result = regex.exec(str);
// console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
    // ye regex match kar raha hai ki nhi str me ki nhi
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Metacharacters in Regular Expressions:-
// Metacharacters are the building blocks of regular expressions. Characters in Regular expression are understood to be either a metacharacter with a special meaning or a regular character with a literal meaning. Following are some common metacharacters in regukar expressions.

// Character                   Explanation                                              Example

// .            This metacharacter allows any character                     matches any character

// +            This character allows one or more preceding term            /ah+x/ matches ""ahx" or "ahhhhhhhx"

// *            This character allows zero or more preceding term           /ah*x/ matches "aax", "ahx", or "ahhhhx"

// ?              This character allows zero or one preceding term          /ah?x/ matches "aax" and "ahx" but not "ahhx"

// \.                  This character allows a period(.) in the text              /etc\./ matches "etc."

// \/              This character allows forward slash in the text.             /.+\/.+/ matches "home/my"

// \*              This character allows asterik in the text.                 /my\*name/ matches "my*name"

// \+                   This character allows Plus sign in the text.         /.+ \+ .+/ matches "five + four"

// \?               This character allows question mark in the text.           /.+\?/ matches "really?"

// ^                The string should begin with the specified word           /^Bye/ matches "Bye" in "Bye Harry"
//                            written after this character.  

// $                  The string should end with the specified           /Harry$/ matches "Harry" in "and Harry"
//                      word written before this character.

//  Examples of Metacharacters:-
// Following are the some examples of how we can use metacharacters in JavaScript.

// Do a global search for "m.d" in a string:
let reg = /m.d/g;
str = "He's mad!"; //matches
// Do a global search for at least one "e":

reg = /e+/g;
str = "Codeeeee!";//matches
// Do a global search for a "5", followed by zero or more "0" characters:
reg = /50*/g;
str = "5, 500 or 5000?"; //matches
// Do a global search for "javaScript" at the end of a string:
reg = /javaScript$/g;
str = "Welcome to the tutorial of javaScript"; //matches
// Do a global search for "javaScript" at the beginning of a string:
reg = /^javaScript/g;
str = "javaScript supports OOP";//matches
// Do a global search for "code" followed by " harry":
reg = /code(?= harry)/g;
str = "code with harry"; //matches
// Do a global, case insensitive search for "code" not followed by "JavaScript":
reg = /code(?=javaScript)/gi;
str = "CodeJavaScript"; //does not match
if(reg.test(str)){
    console.log(`The string ${str} matches the expression ${reg.source}`);
    // ye regex match kar raha hai ki nhi str me ki nhi
}
else{
    console.log(`The string ${str} does not match the expression ${reg.source}`);
}
