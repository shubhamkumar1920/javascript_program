// These shorthand classes include:
// \w:  This is the "word character" class that represents the regex range [A-Za-z0-9_], and it will match a single uppercase character, lower-case character, digit, or underscore
// \d: This is the "digit character" class represents the regex range [0-9], and it will match the single-digit character
// \s: This is the "whitespace character" class that represents the regex range, matching a single space, carriage return, tab, line break, form feed, or vertical tab
// Along with shorthand character classes( \w, \d, and \s), we can also use the negated shorthand character classes. These negated shorthands will match any character that is NOT in the regular shorthand classes.

//  These negated shorthand classes include:

// \W: the "non-word character" class represents the regex range [^A-Za-z0-9_], matching any character that is not included in the range represented by \w
// \D: the "non-digit character" class represents the regex range [^0-9], matching any character that is not included in the range represented by \d
// \S: the “non-whitespace character” class represents the regex range [^ \t\r\n\f\v], matching any character that is not included in the range represented by \s
// Here is the table of shorthand character classes with examples. This table contains all the information explained above.

// Character Classes (Shorthand)
// Character                         DESCRIPTION                                Example

// \d                     This character means any digit character;            \d matches 1,56,77 12, 123, etc., 
//                     functionally equivalent to [0-9] or [[:digit:]]         but not 1b7 or aabb6.                
//                                                                            One or more of any digit characters.
                                                                            
// \D                 This character means any non-digit character;         \D matches a, ab, abcd, ab&, but not 1
//                    functionally equivalent to [^0-9] or [^[:digit:]]

// \w                This character means any "word" character.            \w matches a, ab, a1,abc123 but not 
//                  That is, any alphanumeric character and its            !&. One or more upper- or lower-case 
//                 functionally equivalent to [_A-Za-z0-9]                  letters or digits,but not punctuation 
//                            or [_[:alnum:]]                               or other special symbols/characters.

// \W              This character means any non-alphanumeric character;     \W matches *, &, but not race or y1.
//              functionally equivalent to [^_A-Za-z0-9] or [^_[:alnum:]]   One or more of any character but
//                                                                          upper- or lower-case letters and digits.
  
// \s             This character means any white space character;           vegetable\s matches "vegetable"
//                space, new line, tab, non-breaking space, etc.;           followed by any non-white space 
//                  functionally equivalent to [[:space]]                        character.

// \S            This character means any non-whitespace character;         vegetable\S matches "vegetable"
//               anything other than space, newline, tab, non-breaking       followed by any non-whitespace
//                 space, etc.; functionally equivalent to [^[: space]]          character.

 

// Assertions:-
// An Assertion is a regular expression that will succeed if a match is found and fails if a match is not found. Assertion consists of Anchors and Lookarounds.

//  ^: The symbol "^" matches at the beginning of the string.
//  $: The symbol "$" matches only at the end of the string.
//  \b: The character "\b" matches only at a word boundary.
//  \B: the character "\B" Matches only if not at a word boundary.
//  (?=«pattern»): This is a positive lookahead. It matches the regular expression with the pattern only if the pattern matches what comes next. The pattern is used only to look ahead but otherwise ignored.
//  (?!«pattern»): This is the negative lookahead: It matches the regular expression with the pattern only if the pattern does not match what comes next. The pattern is used only to look ahead but otherwise ignored.


 console.log("This is tutorial 49");

// Character classes
let regex = /\war/;     //word character - _ or alphabet or numbers
// ye ek word me match mil raha tha
regex = /\w+d1r/;       // \w+ means one or more word characters
// ye pehle kuch character hoga ek word me phir d1r hona chhiye to true hoga
regex = /\Wbhai/;       // Non word 
// ye space ek non word character hai to bhai print hua
regex = /\W+bhai/;      // \W+ means more than one Non word character
// %%$@ ye sab non word character hai to match milega
regex = /number \d999/; // \d means digit
// koi bhi ek digit phir 999  match kardo
regex = /number \d+/;   // \d+ means more than one digit
// more than one digit ko match kardo
regex = /\D999/;        // \D means non digit
// means koi alphabet ke baad 999 aana chhiye
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/;  // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/;  // Match non whitespace character
// ka se pehle ek space hai to null aayega
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/;  // word boundary
// ye word boundary hai means 4r5r ke baad space hai to yaha word boundary hai agar waha space nhi hota to word boundary nhi hota

// Assertions
regex = /h(?=y)/;
// isme h ke baad y aana chhiye to true return karega nhi to false
regex = /h(?!y)/;
// isme h ke baad y nhi aana chhiye to true return karega nhi to false
str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";



let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
