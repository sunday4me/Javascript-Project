// A variable is a container for storing data

// A variable behave as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
//2. Assignment ( = assignment operator)

// How to accept user input

// EASY Way with a window prompt

//let username = window.prompt('What's your name?");
//console.log(username);

//DIFFICULT WAY HTML textbox


let username;

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello" + username;

}