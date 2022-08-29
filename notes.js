// slice() extracts a section of a string
//          and returns it as a new string,
//          without modifying the original string


/* let fullName = "Sunday Jimoh"
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);


//other method

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(0, fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/

// if statement = a basic form of decision making
//                if a condition is true, then do something
//                 if not, then don't do it!

// switch = statement that examines a value
//          for a match against many case clause.
//          More efficient that many "else if" statements


// while loop = repeat some code
//              while some condition is true
//              potentially infinite

// do while loop = do something,
//                 then check the condition,
//                 repeat if condition is true

// for loop = repeat some code a
//            certain amount of times

// function = Define code once, and use it many times.
//            To perform some code, call the function name.

// return = returns a value back to the place
//          where you invoked a function


// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands
//                    
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False      
//
// condition ? exprIfTrue : exprIfFalse


// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function() {}
// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions.

//toLocaleString() = returns a string with a language
//                   sensitive representation of this number

// number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

// array = thinks of it as a variable
//         that can store multiple values

// let fruits = ["apple", "orange", "peach"];

// fruits.push("lemon"); //add an element to the array
// fruits.pop("lemon"); //remove last element of the array
// fruits.unshift("mango"); //add an element to the beginning of array
// fruits.shift(); //remove an element from the beginning of the array
// fruits.sort(); //sort the array 
//fruits.sort().reverse(); //sort the array in reverse order

//2D array   = An array of arrays
/*
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits,vegetables,meats];

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }

}
*/

// spread operator  = allows an iterable such as an
// ...                array or string to be expanded
//                    in places where zero or more
//                    arguments are expected
//                    (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);
*/

/* Example 2

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);
console.log(...class1);
*/

// rest parameters = represents an indefinite number 
// ...               of parameters
//                   (packs arguments into an array)

/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b,c,d,e));

function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number
}
    return total
}
*/

// callback = a function passed as an argument
//            to another function.

//  Ensures that a function is not going
//  to run before a task is completed.
//  Helps us develop asynchronous code.
//  (When one function has to wait for another function)
//  that helps us avoid errors and potential problems
//  Ex. Wait for a file to load


// let total = sum(2, 3);
// displayConsole(total);

// function sum(x, y) {
//    let result
//}

/*
sum (2,3, displayConsole);

function sum(x,y, callBack) {
    let result = x + y;
    callBack(result);
}
 
function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
*/


// array.forEach() = executes a provided callback function
//                   once for each array element
//(element, index, array)
/*

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
console.log(element);
}

*/

// array.map() = executes a provided callback function
//               once for each array element
//               AND creates a new array

/*

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

//squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);

}
function print(element){
    console.log(element);

}

*/

// array.filter() =  create a new array with all elements
//                   that pass the test provided by a function

/* let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}
*/

// array.reduce() =  reduces an array to a single value

/* let prices = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkout(total, element){
    return total + element;
}
*/

// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it 

// arrow function  = compact alternative to a traditional function.
// =>

//Traditional  Function
/*const greeting = function(username){
   console.log(`Hello ${username}`);
}
greeting("Sunday");
*/
 //Traditional function with two arguments
/* const percent = function(x,y){
    return x / y * 100;
}

console.log(`${percent(50, 150)}%`)
*/

// Note: You do need curly braces {} if your function uses more than 1 statement.

//arrow function with one argument

/*const greeting = username => console.log(`Hello ${username}`);
  greeting("Sunday"); */

  //arrow function with two arguments
 /* const percent = (x,y) =>  x / y * 100;

 console.log(`${percent(50, 150)}%`) 
 */

 /*
 let grade = [100, 50, 90, 60, 80, 70];

 grade.sort((x,y) => y - x);
 grade.forEach(element) => console.log(element); 
 */   



