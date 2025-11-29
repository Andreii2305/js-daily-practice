function simpleCalculator(num1, num2, operator){
    if(operator === '+'){
        return num1 + num2;
    } else if(operator === '-'){
        return num1 - num2;
    } else if(operator === '*'){
        return num1 * num2;
    } else if (operator === '/'){
        return num1 / num2;
    } else{
        return "invalid operator";
    }
}

let num1 = 5;
let num2 = 10;

//choose between these operators ('+', '*', '-', '/')
let operator = '-';


console.log(simpleCalculator(num1, num2, operator));