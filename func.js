//passing object as an argument in a function 

class Car {

    constructor(model, year, color){
        this.model = model;
        this.model = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeColor(car1, "gold");
displayInfo(car1);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}