"using strict"

const userName = prompt("Enter your name");

const resultP = document.getElementById("coffee");

const numofCoffee = prompt("Enter how many coffee's you want to purchase");
const tipAmount = prompt("Enter your tip amount");
resultP.innerHTML = `${userName} ordered ${numofCoffee} coffee's`;
parseFloat(numofCoffee);
parseFloat(tipAmount);

const totalP = document.getElementById("total");

    let Tax = 1.07;
    let Price = 2.50;
    let totalCost = (parseFloat(numofCoffee)*Price*Tax) + parseFloat(tipAmount);

totalP.innerHTML = ` Your total comes out to ${totalCost.toFixed(2)}`