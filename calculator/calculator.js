
function sum(){
    let num1= document.getElementById('first').value;
    let num2= document.getElementById('second').value;
    let sum= +num1 + +num2;
    document.getElementById('result').innerHTML="sum of two number is :" +sum;

}
function minus(){
    let num1= document.getElementById('first').value;
    let num2= document.getElementById('second').value;
    let sum= +num1 - +num2;
    document.getElementById('result').innerHTML="minus of two number is :" +sum;

}
function multiply(){
    let num1= document.getElementById('first').value;
    let num2= document.getElementById('second').value;
    let sum= +num1 * +num2;
    document.getElementById('result').innerHTML="multiply of two number is :" +sum;

}
function divide(){
    let num1= document.getElementById('first').value;
    let num2= document.getElementById('second').value;
    let sum= +num1 / +num2;
    document.getElementById('result').innerHTML="divide of two number is :" +sum;

}
