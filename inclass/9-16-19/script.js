"using strict"

const userName = prompt("Enter your name");
alert("Hi " + userName);
//you can also do alert(`Hi ${userName}`); it means it will evaluate this code

const resultP = document.getElementById("jump");
// creating a varibale to hold the paragraph

//myP.innerHTML = "Hi ME";

const item1Li = document.getElementById("item1");
const item2Li = document.getElementById("item2");
const item3Li = document.getElementById("item3");
item1.innerHTML = "Penguin";
item2.innerHTML = "Moose";
item3.innerHTML = "Deer";


catName1 = prompt("Enter your first cats name");
catName2 = prompt("Enter your second cats name");
resultP.innerHTML = `My cats are named ${catName1} and ${catName2}`;
//alert("My cats are named " + catName1 + "and " + catName2);






// alert("Hello World") --> sends an alert to the page 
// use "let userName" only if the variable is going to change (like using a for loop)
// use "const userName(or any variable name)" if its going to stay the same throughout the entire code 
// begin all files using "using strict"
// use "control forward slash" to make a comment 