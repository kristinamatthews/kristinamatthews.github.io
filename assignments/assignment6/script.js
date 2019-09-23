"using strict"

const userName = prompt("Enter your first name");
const name = document.getElementById("first");
name.innerHTML = `First Name: ${userName}`;

const userName2 = prompt("Enter your last name");
const lastName = document.getElementById("last");
lastName.innerHTML = `Last Name: ${userName2}`;

const product = prompt("Please enter the product you want to purchase");
const productName = document.getElementById("product");
productName.innerHTML = `Product Name: ${product}`;

const count = prompt("Please enter how many of this item you want to purchase");
const countNum = document.getElementById("count");
countNum.innerHTML = `Product Count: ${count}`;

const price = prompt("What is the price of this item?");
const priceAmount = document.getElementById("price");
priceAmount.innerHTML = `Product Price: $${price}`;

let Tax = 1.07;
const taxAmount = document.getElementById("tax");
taxAmount.innerHTML = `Tax: 0.07`;

let totalCost = (parseFloat(count)*parseFloat(price)*Tax);
const totalP = document.getElementById("total");
totalP.innerHTML = `${userName} ${userName2} ordered ${count} ${product}(s) totalling ${totalCost.toFixed(2)}`;
