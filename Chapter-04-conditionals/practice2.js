/*Q.3-check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,
 "FizzBuzz" for both.*/       

let number = 0

if(number % 3 ==0 && number % 5 ==0 ){
console.log("FizzBuzz");

}else if(  number % 3 == 0 ){

    console.log("Fizz");
    
}else if (number % 5 ==0 ){
    console.log("Buzz");
    
}else{
    console.log("Not divisible by 3 or 5");
    
}













/*Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.*/

/*
let number = Number(prompt("Enter first number"))
let number2 = Number(prompt("Enter Second number"))
let operator = prompt("Select an operator: (+,-,*,/)")
let result
switch(operator){
    case "+":
        result = number + number2
        console.log(result);
    break
    case "-":
        result = number - number2
        console.log(result);
    break
    case "*":
        result = number * number2
        console.log(result);
    break
    case "/":
        result = number / number2
        console.log(result);
    break
    default :
    console.log("Please select correct operator.");
}
*/