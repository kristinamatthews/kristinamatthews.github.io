"using strict"

/*const myName = "Kristina";
myName = "Jamie"
console.log(`Hello World ${myName}`);
*/


// good to use console.log to do checks while you're coding
// this way they won't pop up as alerts on the screen, use the console to debug your code
// you can see it in the console log when you're editing "elements"

//gather fruit names 
function displayFruits() {

    const fruit1 = document.getElementById("fruit1").value;
    console.log(`First fruit: ${fruit1}`);

    const fruit2 = document.getElementById("fruit2").value;
    console.log(`Second fruit: ${fruit2}`);

    const fruit3 = document.getElementById("fruit3").value;
    console.log(`Third fruit: ${fruit3}`);

    //write result to paragraph 
    const resultElem = document.getElementById("result");
    resultElem.textContent = ` You like ${fruit1}, ${fruit2} and ${fruit3}.`;
}
//call the function
//displayFruits();

//get the button
const btnResult = document.getElementById("btn-results");
btnResult.onclick = displayFruits;