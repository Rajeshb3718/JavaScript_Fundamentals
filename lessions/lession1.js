//Commnda to run this code
// 1. To Switch to lessions folder type cd lessions
// 2. To run below code run node lession1.js


console.log("Hello World!")

//Variables

var firstName = "Rajesh"
let lastName = "Bolugunda"

console.log(firstName)  //prints first name
console.log(lastName)   //prints last name
console.log(firstName +" "+lastName) // concatinates first name and last name.

//declaring variables and assigning values later

var age, dateOfBirth, sex

age = 30
dateOfBirth = "06/14/1992"
sex = "Male" 
console.log("Age is:"+ age + "Date of birth is:"+dateOfBirth +"sex is:"+sex)

//re assign and use the variable(var and let), below I am reassigning the age variable

age = 29
console.log(age)

//Constants

const occupation = "SDET"
console.log(occupation)

// When I try to reassign value for const variable it will not support and throw error.
// And const variable values should be declared at the time of creation.

//const occupation = ""

//Data types

var middleName = "B" //string
var ageOfBrother = 31 //int
var isHeMarried = false // boolean
var yearsInMarrige = null //null type
var numberOfCars = undefined //undefibed

