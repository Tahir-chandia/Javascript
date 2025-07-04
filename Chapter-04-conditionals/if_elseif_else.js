//3.if...else if...else (Also called "Else-If Ladder")
//Question: Make grade system by user input


let inp = 99

if (inp>=90 && inp<=100  ){
    console.log("Grade A");
}else if (inp>=80 && inp <= 90 ){
    console.log("Grade B");
}else if (inp>=70 && inp <= 80 ){
    console.log("Grade C");
}else if (inp>=60 && inp <= 79 ){
    console.log("Grade D");
}else if (inp>=50 && inp <= 59 ){
    console.log("Grade E");
}else if (inp>100  ){
    console.log("Invalid number please write valid number");
}else{
    console.log("Fail You need to study more");
    
}