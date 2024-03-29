#!/usr/bin/env node
import  inquirer from "inquirer";

const RandomNumber=Math.floor(Math.random()*6+1); //Computer generate Random number's within the 6

//user input for guessnumber
const numbers= await inquirer.prompt([
    {name:"userGuessnumber" , type:"number" , message:"please guess number between 1-6 ="}
]);

//compare user input and with computer generated number and show result
if(numbers.userGuessnumber===RandomNumber) 
{
console.log("CONGRATS! Your guessed number is Correct ");
}
else
{
 console.log("your guessed number is not correct");
}
