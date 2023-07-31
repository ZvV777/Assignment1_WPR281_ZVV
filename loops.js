console.log("For Loop:");
console.log("Create a program that will print odd numbers only, between 5 and 13, inclusive.");
for (var num = 5; num <15; num +=2)
{
    if(num===15)
    {
        break;
    }
    console.info(`${num} is an odd number`);
}
console.log("\r\n");
console.log("-------------------------------------------------------------------------------"); 
console.log("-------------------------------------------------------------------------------");
console.log("\r\n");

console.log("For..in Loop");
console.log("Create a JavaScript program that iterates through the following objects:");
console.log("cities = {'a':'Athens', 'b':'Belgrade', 'c':'Cairo'}, and log in the key value pairs one by one");
//Object
let cities = {"a":"Athens", "b":"Belgrade", "c":"Cairo"};
//Iterate ober the properties
for (let value in cities)
{
    console.log(`${value}: ${cities[value]}`);
}

console.log("\r\n");
console.log("-------------------------------------------------------------------------------"); 
console.log("-------------------------------------------------------------------------------");
console.log("\r\n");

console.log("For..of Loop");
console.log("*****************************************************************************************");
console.log("Create a JavaScript program that iterates through the following array:");
console.log("names = {'Fred', 'Tom', 'Bob', 'Charlie'}; and log in the names in the array one by one");
let ArrayOfNames = ["Fred", "Tom", "Bob", "Charlie"];
for(let i of ArrayOfNames){
    console.log(i);
}
console.log("*****************************************************************************************");
console.log("*****************************************************************************************");
console.log("Create a JavaScript program that iterates through the following string:");
console.log("greet = 'Hello World!'; and log in the characters in the string, one by one");
let greet = "Hello World!";
for(let char of greet){
    console.log(char);
}
console.log("*****************************************************************************************");

console.log("\r\n");
console.log("-------------------------------------------------------------------------------"); 
console.log("-------------------------------------------------------------------------------");
console.log("\r\n");

console.log("While Loop");
document.write("<p style = 'text-align: center; background-color:powderblue; font-family:courier; font-size:400%;'> While Loop </p>");
document.write("<p style = 'text-align: center; font-family:courier; background-color:black; color:powderblue;'> Create a JavaScript program that uses a while loop to print numbers one the browser.<br> The program should ask the user to type in the end value, and then loops printing values from numbers 1 until the end value set by the user.</p>");
let endvalue = prompt("Enter end value: ");
var i = 1;
document.write("<div style = ' text-align: center; font-family:courier; background-color:black; color:powderblue; width:50%;'>");
while (i <= endvalue)
{
    document.write("<p> The number is "+i+" </p>");
    i++;
}
document.write("</div>");

document.write("<p style = 'text-align: center; background-color:pink; font-family:courier; font-size:400%;'> Do-While Loop </p>");
document.write("<p style = 'text-align: center; font-family:courier; background-color:black; color:pink;'> Create a JavaScript program that uses a do while loop to print numbers one the browser.<br> The program should ask the user to type in the end value, and then loops printing values from numbers 1 until the end value set by the user.</p>");
let endvalue2 = prompt("Enter 2nd end value: ");
var p = 1;
document.write("<div style = ' text-align: center; font-family:courier; background-color:black; color:pink; width:50%;'>");
do{
    document.write("<p> The number is "+p+" </p>");
    p++;
}while (p <= endvalue2);
document.write("</div>");
