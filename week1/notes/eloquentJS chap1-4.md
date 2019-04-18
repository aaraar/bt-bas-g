**Chapter 1**
-
Bits are information stored as either a '1' or a '0'.
Javascript uses a fixed number of 64 bits for a single value.

**Numbers**
- With numbers, arithmetic is possible
- Infinity and -Infinity are infinite numbers in JS and always will be (Infinity-1 is still Infinity)
- NaN represents the result of a calculation that does not yield a meaningful result (0/0, Inifinirt - Infinity) NaN itself is actually a number

**Strings**
- Strings are arrays of characters that represent text
- Strings can escape certain characters to display them correctly. \ represents an escape so \" display as a " however \n makes a newline (normal characters have special escape functions)
- Arithmetic is not possible on strings, however adding to a string adds it to the string and where a string contains a number, JS sometimes tries to convert it to a number in an arithmetic expression

**Operators**
Unary operators accept 1 value
Binary operators accept 2 values
Ternary operator(s) accept 3 values, although there is only 1 ternary operator, THE ternary operator

**Boolean values**
- Boolean values result from a declaration of false or true and are the result of a comparison
- Logical operators also result in a Boolean value

**Empty Values**
Null and Undefined are empty values  
Null is actually an empty variable and undefined is an undefined variable (never declared)  
Example from https://www.ajaymatharu.com/javascript-difference-between-undefined-and-null/ which makes a lot of sense

var test1 = null;  
console.log(test1);  
// null  
console.log(typeof test1);  
// object  
if(test1 ){ console.log("true");} else {console.log("false");}  
//false  

var test2;  
console.log(test2);  
// undefined  
console.log(typeof test2);  
// undefined  
if(test2){ console.log("true");} else {console.log("false");}  
//false  


**Type Coercion**
As mentioned before, JS tries to work with the values you give it without requiring a specified type. This means that JS 
also tries to convert certain variables to use it in an expression where possibly multiple types are used
So with "5" - 1 "5" becomes a number, null * 8 null becomes 0 etc

**Chapter 2**
-
Every argument of code is an expression and expressions can form statements.
The simplest statement is just an expression with a semicolon for example:  
1;  

Binding is when you declare that a variable must be created or assign it a (new) value for example  
let ten = 10;  
A binding points to a value, it is not tied to a value. This means that binding a variable to an object that already exists always updates when the object updates

You cannot use certain names for bindings because they are reserved by JavaScript, these names are:  
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield

The collection of bindings and their values that exist at a given time is called the environment.
function. A function is a piece of program wrapped in a value. Executing a function is called invoking, calling, or applying it

Conditional execution executes certain code when the enclosed code has a condition that results to true.
(if or switch statements for example)
Normally a program executes from top to the bottom but with the conditional execution you can break this flow.  
This also creates the option of branching your code
Loops make this even more fun because it can iterate the same code multiple times determined by a conditional statement
You can break loops with the keyword break; inside a loop  

**Chapter 3**
-
Function declaration examples:  
function foo(parameter){//code};  
const foo = function bar(parameter){//code};  
const foo = (parameter) => {//code};  

Calling: foo(argument);  

When Bindings defined outside of any function or block are in the global scope and are usable everywhere in the code.
Bindings inside a block or function are local scoped and are only usable within that scope
Locking variables behind functions of blocks is called closure  

The call stack is the order in wich Blocks are executed by the browser


When a function recalls itself to do repeating tasks it's called recursion.
Make sure there is always a way out of the recursion so that it does not overflow the stack (lel. stackoverflow, that's where you go when this happens :S)
A recursive function may never have side effects if it wants to be truly "Functional Programming"

Arrow functions are always anonymous and require less typing.
() =>  


**Chapter 4**
-
An array is a collection of values.
An Object contains properties that contain either values, arrays, other objects.
All types in javascript are objects, and those objects contain methods.
For example a string has a toUppercase method.

Some datastructures such as strings and arrays hav a for-of loop, that loops through certain entries into a dataset declared after the far   
for (let entry for array) {  
    console.log(entry)  
}  
Logs all entries in an array

When a function can take multiple of the same type you can let it accept rest parameters.
you declare this paramater with three dots in front of it like below:  
function max(...numbers) {  
    let result = -Infinity;  
      for (let number of numbers) {  
        if (number > result) result = number;  
      }  
      return result;  
}  

The Math object has a lot of method that can do basic and advanced arithmetics.  
Saving data is possible with JSON, wich looks a lot like JS objects. This makes them easy to use in conjunction.

**Chapter 5**
-
**Higher order functions**


**Chapter 6**
-
*OOP vs Functional*

**Prototype**  
The prototype for how a type or object works. The Array prototype for example includes al standard methods

**Classes**  
Classes in JS are comparable to Objects

**Iterators**  
Iterators are functions that iterate through steps or data

**Getters & Setters**  
Getters & Setters are functions that either get a property or set a property

**Inheritance**  
Inheritance: check freecodecamp