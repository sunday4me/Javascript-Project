// generator function

/*
const getNumbers = function* (){
    yield 1;
    yield "hello";
    yield true;
    yield { name : "Alex"};
    return "i am done";
}

const numbersGen = getNumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
*/

/*
const getNumbers = function* (numbers){
    for (var  i = 0; i < numbers.length; i++) {
        yield numbers[i]
    }
}

const getNumberGen = getNumbers([1,2,3,4,5,6,7,8,9,10,11]);

const interval = setInterval(() =>{
    const next = getNumbersGen.next();
    if(next.done){
        console.log("this generator is done");
        clearInterval(interval);
    }else{
        const number = next.value 
        console.log("number");
    }
}, 1000);
*/


