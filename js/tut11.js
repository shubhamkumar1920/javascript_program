// The Window Object:-
// The window object represents a window in the browser containing the DOM document. The browser automatically creates a window object. The window is not the object of the JavaScript. It is the object of the browser. A window can be the main window, a frameset, or even a new window created with JavaScript. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.
// Window object has many properties and methods. The following are the few properties and methods of window object. 

// Window Object Properties:-
// The window object properties are the variables created inside the window object. We can access the properties of window object by using the syntax:
// window.propertyname
// where property name is the name of the property.

// The following are the most popular window object properties:

// Properties                      Explanation

// width                 It specifies the initial width of the browser window.

// height                It specifies the initial height of the browser window.

// innerWidth            It specifies the initial width of the window content area

// innerHeight           It specifies the initial height of the window content area

// outerWidth            It specifies the initial width of the navigator window

// outerHeight           It specifies the initial height of the navigator window

// menubar               It specifies whether the window should contain the browser menubar

// location              It specifies whether the window should contain the browser location/URL box

// scrollbars            It hides or shows browser horizontal/vertical scrollbars

// top                   Specified the number of pixels from the top of the screen to the new window

 
// Window Object Methods:-
// The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the browser window, such as how it displays a message or gets input from the user.

// Following are the some of the most commonly used window object methods:

// Method                       Description
// isme window object globAl hota hai hum window.alert bhi likh sakte hai
// alert()                  It will display an alert box with a message on the screen

// blur()               It will remove focus from the current window

// close()                        It will close the current window

// confirm()              It will display a dialog box with a message on the screen

// focus()                  It will set the focus to the current window

// moveTo()                  It will move a window to the specified position

// open()                        It will open a new browser window

// print()                         It will print the content of the current window

// prompt()                        It will display a dialog box that prompts the user for input

// resizeBy()                    It will resize the window by the specified pixels

// resizeTo()                     It will resize the window to the specified height and width

// scrollBy()                        It will scroll the document by the specified number of pixels

// scrollTo()                    It will scroll the document to the specified coordinates

// stop()                              It will stop the window from loading

 
// Example:-
// In the following example, we will calculate the Width and Height of the Window using window object properties and then show the result on the screen using alert( ). As mentioned in the above table, The window object provides the innerWidth and innerHeight property to determine the width and height of the browser window. Here is an example

let a = window.innerWidth;
let b = window.innerHeight;
alert("Width: " + a + ", " + "Height: " + b);
Result:-
 console.log('This is tut 11');
let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');
// ye aapko alert bhejta hai browser jisme aap input de sakte hai aur wo console me print ho jata hai

// a = confirm('Are you sure you want to delete this page?');
// ye aapko ek boolean deta means ye ek alert bhejta hai jisme ok aur cancel rahta hai dono me select karna rahta hai
a = window.innerHeight;
// ye height batata hai aapke window ka aap agar isko chota me kholega to kaam bata hai window size aur pura screen size ka hoga to pura batega 
a = innerWidth;
// width batayega window ka
a = scrollY;
// window ko y axise se scroll me increase karta hai
a = location.toString();
// uska pura exact location de deta hai
// a=location.reload();
// ye page ko reload karta hai
// a=location.href;
// ye aapko page ka url deta hai
// a=location.href='//codewithharry.com';
// to ye redirect ho jaayega url me jo assign karega usme
a = window.history;
// ye history print karta hai
a=window.history.go(-1);
// last visit page me le jaayega aapko
console.log(a);          