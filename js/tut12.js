// DOM - Document Object Model:-
// We can access the document content and modified it is called the Document Object Model, or DOM. The Objects are organized in a hierarchy.

// The window object is at the top of the hierarchy. The second one is the document object. The HTML document that gets loaded into a window becomes a document object. The third one is the forms. Everything enclosed in the <form>...</form> tags sets the form object. And the last one is the Form control elements. The form object contains all the elements defined for that object, such as input fields, buttons, radio buttons, and checkboxes.


 
// The DOM is a tree-like representation of the contents of a webpage. Tree of “nodes” with different relationships depending on how they are arranged in the HTML document.

// <div id="main_class ">
// <div class="myclass1"></div>
// <div class="myclass2"></div>
// </div>
// Explanation:
// In the above example, the

//  <div class="myclass1"></div> is a “child” of <div id="main_class"></div> and a sibling to <div class="myclass2"></div>. It is like a family tree. <div id="main_class"></div> is a parent, with its children on the next level, each on their own “branch”.

// DOM Properties:-
// With the Document Object Model (DOM), we can create and build documents, add, modify, or delete elements and content. Anything found in an HTML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions. The syntax for accessing the DOM properties is:

// document.property_name
//  Here are some of the most common properties of the document object model.

// Property                              Description

// document.anchors                     It will return all <a> elements that have a name attribute

// document.baseURI                     It will return the absolute base URI of the document

// document.body                         It will return the <body> element

// document.cookie                      It will return the document's cookie

// document.doctype                      It will return the document's doctype

// document.documentElement              It will return the <html> element

// document.documentMod                  It will return the mode used by the browser

// document.documentURI                  It will return the URI of the document

// document.embeds                       It will return all HTML <embed> elements

// document.forms                       It will return all HTML <form> elements

// document.head                        It will return the HTML <head> element

// document.images                       It will return all HTML <img> elements

// document.implementation               It will return the DOM implementation

// document.links                       It will return all HTML <area> and <a> elements that have a href attribute

// document.scripts                      It will return all HTML <script> elements

// document.title                       It will return the <title> element

// document.URL                        It will return the complete URL of the document

// Note that: The DOM is a representation of the various components of the browser and the current Web document that can be accessed or manipulated using JavaScript.
// Website.html code as described/written in the video
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>
//     <div class="container">
//         <h1 id="heading"> Welcome to Code With Harry</h1>
//         <div id="myfirst" class="child red good" id="first">child 1

//             <ul class="this">
//                 <li class="childul">this</li>
//                 <li class="childul">is</li>
//                 <li class="childul">a</li>
//                 <li class="childul">list </li>
//                 <li class="childul">of my dreams</li>
//             </ul>
//         </div>
//         <div class="child">child 2</div>
//         <div class="child red">child 3</div>
//         <div class="child">child 4</div>
//         <form action="none.html" method="post">
//             <a href="//codewithharry.com">Go to Code With Harry</a>
//             <br>
//             <br>
//             Search this website: <input type="text" name="Hello" id="">
//             <input type="button" value="submit">
//         </form>
//     </div>
//     <br>
//     <div class="no">this is a dummy div1</div>
//     <div class="no">this is a dummy div2</div>
//     <div class="no">this is a dummy div3</div>
// </body>
// <!-- <script src="js/tut12.js"></script> -->
// <!-- <script src="js/tut14.js"></script> -->
// <script src="js/tut15.js"></script>
// </html>
// JavaScript code as described/written in the video
console.log('Welcome to tut 12.js');
let a = document;
// ye pura dom print kar deta hai
a = document.all;
// ye sara tag deta hai
// a = document.body;
// ye dom ka body tag pura de deta hai
// a = document.forms[0];
// ye html me se form deta hai
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// use of a form an array then iterate each element using foreach loop
a = document.links[0];
// ye array return karta hai to isko aap fetch karne ke liye index dena hoga

