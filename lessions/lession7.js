//Loops

//to print hello world 5 time use for loop

for(let i=0; i<5; i++)
{
  console.log("Hello World!")
}

// for loop on array

var cars = ['Rangerover','Dodge','Toyota']

for(let car of cars)
{
    console.log(car)
}

//Using break command

var cars = ['Rangerover','Dodge','Toyota']

for(let car of cars)
{
    console.log(car)
    if(car=='Dodge')
    break
}

// Using for loop by declaring i variable
var cars = ['Rangerover','Dodge','Toyota']

for(var i=0; i<cars.length; i++)
{
    console.log(cars[i]);
}


// Using foreach

cars.forEach(car =>{
    console.log(car)
})

