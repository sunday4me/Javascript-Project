// return = returns a value back to the place
//          where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width"); 
width = window.prompt("Enter height");

area = getArea(width, height);

function getArea(width, height){
    return width * height;
}