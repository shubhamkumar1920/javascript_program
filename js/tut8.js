// Conditions              Meaning
// a == b              a is equal to b  
// a  != b             a is not equal to b
// a < b               a is less than b 
// a > b                a is greater than b 
// a <= b             a is less than or equal to b  
// a >= b           a is greater than or equal to b
// a===b            a has the same value and same type as b

// if condition:-
// The if statement is one of the most popular statements that are used by the programmers. We use if statement when we want to execute a statement if the certain condition is satisfied. 

// Syntax:
 if(condition)
{ 
// code to be executed 
}
// Example: if condition

if( 5 > 0){
console.log("5 is greater than 0");
}
if( 5 < 0){
console.log("5 is less than 0");
}
// The first if statement contains 5 > 0 as a conditional expression. The conditional expression 5 > 0 will be evaluated to true, so the message "5 is greater than 0" will be displayed on the console, whereas the conditional expression in second if statement will be evaluated to false, so the message "5 is less than 0" will not be displayed.

// else condition:-
// When the if condition evaluates to false, we use the else statement. The else statement must follow if or else if statement. Multiple else statement at the same time is not allowed.
// Syntax:

// if(condition expression){
//Execute this code. 
// }else{
//Execute this code.
// }
// Example: else condition

let salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}else{
console.log("My Salary is less than or equal to 1000");
}
// Output:-My Salary is less than or equal to 1000

// The first if statement contains salary > 1000 as a conditional expression. The conditional expression salary > 1000 will be evaluated to true, so the message "My salary is greater than 1000" will be displayed on the console, whereas if the conditional expression evaluated to false, so the message "My salary is less than or equal to 1000" will be displayed.

// else if condition:-
// We use "else if" condition when we want to apply second level conditions after the if statement. Following is the syntax of else if condition.

// Syntax:-

// if(condition expression)
{
//Execute this code block
}
// else if(condition expression){ 
//Execute this code block
// }
// Example: else if condition

var salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}
else if(salary < 1000){
console.log("My Salary is less than 1000");
} else{
console.log("My Salary equal to 1000");
}
// The first if statement contains salary > 1000 as a conditional expression. The conditional expression salary > 1000 will be evaluated to true, so the message "My salary is greater than 1000" will be displayed on the console, whereas if Salary <1000 expression evaluated to true, so the message "My salary is less than 1000" will be displayed. And if both conditions are evaluated to false, then the last else block's statements will execute.

//  JavaScript if else shortcut: ternary operator:-
// JavaScript provides a ternary operator that can be used as a shorthand of the if-else statement. Following is the syntax of the ternary operator.

// Condition? expression1: expression2
// If the condition evaluates to true, the operator returns the value of the expression1. And if the condition evaluates to false, it returns the value of the expression2.

// Example:-

// 5>0? "Greater" : "Smaller";
// If the expression 5 > 0 is evaluated to true, the message "Greater" will display. And if the condition is evaluated to false, the message "Smaller" will display.

// The JavaScript Switch Statement:-
// The switch statement is used to evaluate the expression. The switch statement is a part of JavaScript conditional statements. It is also used to control the flow of program execution. The switch performs different actions based on different conditions. The purpose of using the switch statement is to select one of many code blocks to be executed if it. The switch statement is often used with a break or a default keyword.

// Syntax:-
switch(expression) {
case a:
  // code block
 break;
case b:
 // code block
 break;
default:
 // code block
}
// The expression in the switch statement is evaluated once. The value of the expression is compared with the values of each case. If the expression has a match, the associated block of code is executed, and if there is no match, the default code block is executed.

// The break Keyword:-
// The break keyword in JavaScript is used to breaks out of the switch block. This keyword will stop the execution of the block. It is not necessary to break every case in a switch block. 

// Note: If we do not use the break statement, the next case will be executed even if the evaluation does not match the case.

console.log('This is tutorial 8');
const age = 128;
const doesDrive = false;
// const vari = 34;

// if (age!=19){
//     console.log('Age is not 19')
// }
// only checking value not type
// if(age !== 65){
//     console.log('Age is not 65')
// }
// checking value and type of input mean a/q age should be in no not in string
// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }
// check variable is declared aur not
// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45');
// agar true hai to first wala agar false to second wala

switch (age) {
    case 18:
        console.log("You are 18");
        break;
// agar elemnt mila to loop rokne ke liye break use kartw hai
    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;

        // agar element nhi mila to defalut message print hoga
}         
