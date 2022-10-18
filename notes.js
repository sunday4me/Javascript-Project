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

// nested functions = Functions inside other functions.
//                    Outer functions have access to inner functions.
//                    Inner functions are "hidden" from outside the outer function.
//                    used in closures 

/*
let userName = "Sunday";
let userInbox = 0;

    login();

function login(){
    displayUsername();
    displayUserInbox();

    function displayUsername(){
    console.log(`Welcome ${userName}`);
}
function displayUserInbox(){
    console.log(`Welcome ${userInbox} new message`);
    
}
}

*/

// Map = object that holds key-value pairs of any data type
/*
const store = new Map([
["t-shirt", 20],
["jeans", 30],
["socks", 10],
["underwear", 50]
]);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat", 40);
//console.log(store.has("underwear"));
//console.log(store.size);
store.forEach((value, key) => console.log(`${key} $${value}`));
*/

// object = A group of properties and method
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

/* 
const car = {
    model: "Mustag",
    color: "red",
    year: 2023,

    drive : function(){
        console.log("You drive the car");
    },

    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake(); 
*/

// this = reference to a particular object
//        the object depends on the immediate context

/*
const car1 = {
    model: "Mustag",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car2 = {
    model: "Convette",
    color: "blue",
    year: 2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();
  */

// class = a blueprint for creating objects
//         define what properties and methods they have
//         use  constructor for unique properties

/*
class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

*/

// constructor = a special method of a class,
//               accepts arguments and assigns properties

/*
class Student {

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Patrick", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study()

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study()

*/

// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions

/*
class Car{
    
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo");

 Car.startRace();
console.log(Car.numberOfCars);

*/

// inheritance = a child class can inherit all the
//               methods and properties from another class

/*
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    //alive = true;
    name = "rabbit";

    //eat(){
      //  console.log(`This ${this.name} is eating`);
   // }
    //sleep(){
        //console.log(`This ${this.name} is sleeping`);
    // }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
   // alive = true;
    name = "fish";

    //eat(){
        //console.log(`This ${this.name} is eating`);
    //}
    //sleep(){
        //console.log(`This ${this.name} is sleeping`);
    //}
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
   // alive = true;
    name = "hawk";

    //eat(){
    //    console.log(`This ${this.name} is eating`);
    //}
    //sleep(){
        //console.log(`This ${this.name} is sleeping`);
    //}
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

Note : so all the line of code in the code commented with '//' above are all in the parent class and it now inherited since it is function they all performed 

*/

// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class
/*
class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
}
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        //this.name = name;
        //this.age = age;
        super(name, age);
        this.runSpeed = runSpeed;

    }
    
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        //this.name = name;
        //this.age = age;
        super(name, age);
        this.swimSpeed = swimSpeed;

    }
    
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        //this.name = name;
        //this.age = age;
        super(name, age);
        this.flySpeed = flySpeed;

    }
    
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);

*/

// get = binds an object property to a function 
//       when that property is accessed
// set = binds an object property to a function 
//       when that property is assigned a value

/*
class Car {
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `{this._power}hp`;
    }
    get power(){
        return `{this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }else if(value < 0 ){
            value = 0;
        }
            this._gas = value;

        
      
    }
}

let car = new Car(400);

car.gas = -100;

console.log(car.power);
console.log(car.gas);
*/

// anonymous objects = Objects without a name 
//                     Not directly referenced
//                     Less syntax. No need for unique names

/*
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
}
}

let cards = [new Card("A", "Heart"),
              new Card("A", "Spades"),
             new Card("A", "Diamonds"),
             new Card("A", "Clubs"),
              new Card("A", "Heart"),
              new Card("A", "Spades"),
              new Card("A", "Diamonds"),
              new Card("A", "Clubs")];

//console.log(cards[0].value + card[0].suit); 

cards.forEach(card => console.log(`${card.value} ${card.suit}`));
*/

// error = object with a description of 
//       = something went wrong

//       can't open a file
//       Lose connection
//       User types incorrect input
//       TypeError

// throw = executes a user-defined error 

/*
try {
    let x = window.prompt("Enter a #");
    x = number(x);
    if(isNaN(x))  throw "That wasn't a number!";
    if(x == "") throw "That was empty!";

    console.log(`${x} is a number`);

}
catch(error){    
    console.log(error);
}
finally{
    console.log("This always executes");
}

*/

// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function(doesn't pause execution)

/*
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(){
    alert(`Buy this ${item} for ${price}`); 
}

function secondMessage(){
    alert(`This is not a scam!`); 
}
function thirdMessage(){
    alert(`Do It!`); 
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
}
*/

// setInterval() = invokes a function repeatedly after a number of milliseconds 
//                 asynchronous function(doesn't pause execution)
/*
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000, max);

function countUp() {
    count+=1;
    console.log(count);
    if(count >= max) {
        clearInterval(myTimer);
    }
}

*/

// The Date object is used to work with dates & times
/*
let date = new Date();
let year = date.getFullYear();  
let dayOfMonth = date.getDate(); 
let dayOfWeek = date.getDay(); 
let month = date.getMonth(); 
let hour = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds(); 
let ms = date.getMilliseconds(); 
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/


//date = date.toLocaleString();

// document.getElementById("myLabel").innerHTML = format(date);
// document.getElementById("myLabel").innerHTML = formatTime(date);

//console.log(date.getFullYear(), date.getMonth(), date.getDate());

//create function that will format date

 /*
 function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm} `;
}
*/

// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometime later)

/*
console.log("START");
console.log("This step is synchronous");
console.log("END");
*/
/*
console.log("START");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("END");
*/

// console.time() = Starts a timer you can use to 
//                  track how long an operation takes
//                  Give each timer a unique name.

//start
//console.time("Response time");

//alert("CLICK THE OK BUTTON!");
//setTimeout(() => console.log("HELlO!"), 3000);

//end
//console.timeEnd("Response time");

// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//          "I promise to return something in the future"

//          the STATE is 'pending then: 'fulfilled' or 'rejected'
//          the RESTFUL is what can be returned
//          2 parts producing & consuming

// Promise from other tutorial ----------------------------------------------------

//The Promise object is used for asynchronous computations.  Represents a value which may be available now, or in the future, or never.
// Three stage of PROMISE 
// PENDING : initial state, not fulfilled or rejected.
// FULFILLED : meaning that the operation completely successfully.
// REJECTED : meaning that the operation failed.
/*
const promise = new Promise((resolve, reject) => {

    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");

        }    
});

promise.then(value => console.log(value))
    .catch(error => console.log(error));

*/

/*
const promise = new Promise(resolve => {
  setTimeout(resolve, 5000);
});

promise.then( () => console.log("Thanks fo waiting!"));
*/

// You can pass arguments to promised

/*
const wait = time = new Promise(resolve => {
    setTimeout(resolve, time);
  });
  
  wait(3000).then( () => console.log("Thanks for waiting!"));
  */

  // async = makes a function return a promise

  /*
  async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
       return "File loaded";
    }
    else{
        throw "File NOT loaded";

        } 
  }  

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));
    */

    // await = makes an async function wait for a Promise
/*
    async function loadFile(){
        let fileLoaded = true;
    
        if(fileLoaded){
           return "File loaded";
        }
        else{
            throw "File NOT loaded";
    
            } 
      }  

      async function startProcess(){
try{
    //let message = await locateFile();
      //console.log(message);
      let message = await loadFile();
      console.log(message);
      //message = await closeFile();
      //console.log(message);
      }
      catch(error){
        console.log(error);
         }
      }
      startProcess();
    */

    // The idea behind a module is that it's a file of reusable code
    // We can import sections of pre-written code to use whenever you want 
    // Great for any general utility values and functions
    // Helps to make your code more reusable and maintainable
    // Think of modules as separate chapters of a book

    // DOM = Document Object Model (API)
    //       An interface for changing the content of  page

    // console.dir(document);
    // console.log(document.title);
    // console.log(document.URL);
    // document.title = "Title goes here!";
    // document.location = "http://www.google.com/";

    // document.body.style.backgroundColor = "skyblue";

    // add/change HTML elements
    // .innerHTML (vulnerable to XSS attacks)
    // .textContent (more secure)

    // const nameTag = document.createElement("h1");
    // nameTag.innerHTML = "Sunday";
    // document.body.append(nameTag);


//     const title = document.getElementById("myTitle");

//  title.style.backgroundColor ="#222222";
//  title.style.color ="rgb(50, 200, 250)";
//  title.style.fontFamily = "consolas";
//  title.style.textAlign = "center";
//  title.style.border = "2px solid";
//  title.style.display = "block";

// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions