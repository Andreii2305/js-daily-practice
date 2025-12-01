function numGenerator(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minimumNum = 1; //Minimum number to generate
let maximumNum = 10; //Maximum number to generate
console.log("Generated Random Number: " + numGenerator(minimumNum, maximumNum));

//Arrow Function
let random = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;


console.log(random(1, 6));