// functions

//Declerative function
function returnHelloworld(){
    console.log("Hello World!")
}
returnHelloworld()

function sumOfNums(){
    let A = 10
    let B = 20

    console.log(A+B)
}
sumOfNums()

// Anonyms function
var sum = function()
{
  let A = 10
  let B = 20

  console.log(A+B)
}
sum()

//ES6 function syntax
var fullName = ()=>{
    let firstName = "Rajesh"
    let lastName = "Bolugunda"
    console.log(firstName+" "+lastName)
}
fullName()

//Function using parameter

function printInitial(initial){
  console.log(initial)
}
printInitial('RB')

//Function using multiple parameters

function printFirstAndLastName(first, last)
{
    console.log(first+' '+last)
}
printFirstAndLastName('Rajesh','Bolugunda')

//function to return value

function multiplyBytow(num1){

    var result = num1 *2
    return result
}
var myResult = multiplyBytow(5)
console.log(myResult);

// To import single function
import {printAge} from '../Helpers/PrintHelper.js'

printAge(30)

// To import all the functions
import * as helper from '../Helpers/PrintHelper.js'
helper.printAge(40)