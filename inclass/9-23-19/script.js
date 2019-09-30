"using strict"

/*

function displayResult() {
    const resultP = document.getElementById("result");
    resultP.textContent = ` No I'm broke! `
}
const btnResult = document.getElementById("btn-result");
btnResult.onclick = displayResult;

*/

//innerHTML vs textContent, you can write html code inside of innerHTML tag

/* 
window.onload = function() {
    console.log("hello");
    alert("Now see me");
}
once all the html and css has been loaded to the page,
then it will run the funciton given
*/

// use a "===" to make a for sure comparison
// use a "==" to make the values the same type 


function showGiftMessage() {
    console.log("Showing my gift");
    let resultP = document.getElementById("result");
    let present = document.getElementById("inputb").value;
    present = present.toLowerCase().trim();
/*
    if(present === "doll") {
        resultP.innerHTML = "Oh great, I love dolls!";
    }
    else {
        resultP.innerHTML = "Not my favorite gift";
    }

    //resultP.textContent = ` No I'm broke! `

*/

    switch(present) {
        case "doll":
            resultP.innerHTML = "I love dolls!";
            break;
        case "car":
            resultP.innerHTML = "Cars are cool!";
            break;
        default:
            resultP.innerHTML = "Not a big fan of this ):";
    }
}
window.onload = function() {
    const btnResult = document.getElementById("btn-result");
    btnResult.onclick = this.showGiftMessage;
    /* or you can do 
    btnResult.onclick = function() {
        console.log("clicked");
    }
    */
}