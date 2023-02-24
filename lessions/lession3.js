//Objects - object is an entity which can hold multuple values

//In the below example I am creating customer object which will hold firstname and lastname values


var customer = {
    
    firstName : "Rajesh",
    lastName : "Bolugunda",
    cars : ['Rangerover','Dodge','Toyota']  //check this after arrays
}
console.log(customer) // prints both firstname and lastname
console.log(customer.firstName) //prints only firstname
console.log(customer.lastName) //prints only lastname

console.log(customer['lastName']) //pass the variable and get value

//reassigning customer firstname and lastname

customer.firstName = 'Raj'  //different ways of assigning values
customer['lastName'] = 'B'
console.log(`${customer.firstName} ${customer.lastName}`)


//Arrays

var cars = ['Rangerover','Dodge','Toyota'] //we can add number of values and index starts at 0
console.log(cars[0]); //this will print rangerover

cars[1]='Mustang' //re assigning the 1st index array value
console.log(cars[1]) //here it will print Mustang


cars[3] = "Hyundai" //add value to array
console.log(cars[3])

//to call the cars array from customer object

console.log(customer.cars[0])


