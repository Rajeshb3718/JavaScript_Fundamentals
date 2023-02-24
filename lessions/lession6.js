//Conditional operator

//if time is between 6 to 12 - print "Good Morning"
//if time is between 12 to 18 - print "Good Afternoon"
//if time between 12 to 6 - print "Good Evening"


var time = 19

if(time >6 && time < 12)
{
    console.log('Good Morning')
}
else if(time > 12 && time < 18)
{
    console.log('Good Afternoon')
}
else
{
    console.log('Good Evening') // this will print Good Evening
}


//Another example

var customerAgeIsMoreThaneighteen = true
var customerIsUSCitizen = false

var eligibilityForDriversLicence = customerAgeIsMoreThaneighteen && customerIsUSCitizen

if(customerAgeIsMoreThaneighteen && customerIsUSCitizen)
{
console.log('customer is eligible for drivers licence')
}
else
{
    console.log('customer is not eligible for drivers licence')
}