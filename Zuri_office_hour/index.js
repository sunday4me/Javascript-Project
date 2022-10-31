// call back

// function one(function_two) {
//     function_two();

// }

// function two() {

// }

// one(two);

//Jollof rice Ordering Application

// let customer = "Ronaldo";
// let food = "Jollof Rice";

// // order

// let order = (cooking_food) => {
//     cooking_food();
    

// }
// //cooking
// let cooking = () => {
//     console.log(`${customer} ordered ${food}`)
//     console.log(`${customer}'s ${food} is ready!!!`)
    
// }

// order(cooking);




//Jollof rice Ordering Application

// let customer = "Ronaldo";
// let food = "Jollof Rice";

// // order

// let order = () => {
//     console.log(`${customer} ordered ${food}`);
    

// }
// //cooking
// let cooking = () => {
   
//     console.log(`${customer}'s ${food} is ready!!!`);
    
// }

// // Deliver 
// let delivery = () => {
   
//     console.log(`The ${food} has been delivered to ${customer}`);
    
// }

// order();
// cooking();
// delivery();

//using setTimeout to replace the above code

let customer = "Ronaldo";
let food = "Jollof Rice";

// order

let order = () => {
    console.log(`${customer} ordered ${food}`);
    

}
//cooking
setTimeout(() => {
   
    console.log(`${customer}'s ${food} is ready!!!`);
    
}, 3000);

// Deliver 
let delivery = () => {
   
    console.log(`The ${food} has been delivered to ${customer}`);
    
}

order();
cooking();
delivery();










