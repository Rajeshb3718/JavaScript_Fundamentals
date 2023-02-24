//Helpers

export function printAge(age)   //export key says that this function can be exported
{
  console.log(age)              // I have exported this function  lession8.js file
}


// Declaring class

 class PrintFullName
{
   printFirstName(firstname)
   {
        console.log(firstname)
   }

   printLastName(lastname)
   {
    console.log(lastname)
   }

}

export const printFullName = new PrintFullName()