//Addition
function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

add(5, 3);

//Subtraction
function subtract(x, y) {
    let subtract = x - y;
    console.log(subtract);
}

subtract(10, 3);

//Multiplication

function multiply(x, y) {
    let multiply = x * y;
    console.log(multiply);
}

multiply(5, 2);

//Division 
function divide(x, y) {
    let divide = x / y;
    console.log(divide);
}

 divide(20, 10);
 
 //Operator Precedence
 function mixedOp(x, y) {
     let answer = 50 - x + (y * 2) + 10 / x;
     console.log(answer);
     }

mixedOp(5, 4);

//Percentage
function percentage(x, y) {
  let answer = (x / y) * 100;
console.log(percentage);
}

divide(100,25);

//Remainder
function oddOrEven(x){
    let test = x % 2;
    if(test==0) {
        console.log("It is an Even number"); 
    } else {
        console.log("It is an Odd number");
    }
}

oddOrEven(12);
oddOrEven(17);

//Increment (Adds 1)
function upSize(x){
    x++;
    console.log(x);
}

upSize(3);
upSize(5);

//Decrement (Subtracts 1)
function downSize(y){
    y--;
    console.log(y);
}

upSize(2);
upSize(8);

/*Compound Assignments 

Augmented Addition*/
function compAdd(val){
    let augAdd = val+=3;
    console.log(augAdd);
}

compAdd(7);

//Augmented Subtraction
function compSub(val){
    let augSub = val-=5;
    console.log(augSub);
}

compSub(10);

//Augmented Multiplication
function compMult(val){
    let augMult = val *=10;
    console.log(augMult);
}

compMult(8);

//Augmented Division
function compDiv(val){
    let augDiv = val/=2;
    console.log(augDiv);
}

compDiv(100);


    
    