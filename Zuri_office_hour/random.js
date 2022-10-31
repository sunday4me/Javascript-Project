Simple_ATM_CLI

Range = 1 to 2

prompt for username 
prompt user to guess a number withing the ${Range}
computer should randomly guess a number within ${range}

variable points which should start at 0

minValue = 1
maxValue = 2

Range = minValue to MaxValue0

..........................................................................................
// Prompt user for username and display it

const username = prompt("What is your name ?");

// Welcome user using  username

consoe.log(`welcome ${username}`)

//Get  variables that should be placed outside the for loop

let points = 0;
let levels = 1;
let maxStage  = 10;

//For statement 

for (let i = 2;  i < 10;  i++ ) {

 let comGuess =  Math.floor(math.random() *i ) + 1;

let userGuess = parseInt(prompt(`Enter a number between 1 and ${i}` ));

if (comGuess === userGuess){

}else{

}

console.log(userGuess);
}

// inheritance 

class Animal () {
constructor (name, gender ){
this.name =  name;
this.gender = gender;
}

move (){
retrun `${this.name} can move`  ;
}
feed (){
retrun `${this.name} can feed`  ;
}
grow (){
retrun `${this.name} grow rapidly`  ;
}
}

class Cat extends Animal { 
constructor(name, gender) {
super(name. gender);
}

canine(){
return `${super.feed()} on flesh`
}
} 