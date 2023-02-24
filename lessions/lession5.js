//Logical operators "AND"  "OR"

var customerAgeIsMoreThaneighteen = true
var customerIsUSCitizen = true

var eligibilityForDriversLicence = customerAgeIsMoreThaneighteen && customerIsUSCitizen

console.log('Customer is eliginle for licence:', eligibilityForDriversLicence) // this will return true



var customerAgeIsMoreThaneighteen = true
var customerIsUSCitizen = false

var eligibilityForDriversLicence = customerAgeIsMoreThaneighteen && customerIsUSCitizen

console.log('Customer is eliginle for licence:', eligibilityForDriversLicence) //this will return false

//I will use OR operator here with will return true
var customerAgeIsMoreThaneighteen = true
var customerIsUSCitizen = false

var eligibilityForDriversLicence = customerAgeIsMoreThaneighteen || customerIsUSCitizen

console.log('Customer is eliginle for licence:', eligibilityForDriversLicence)

