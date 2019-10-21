function highlightCell(event) {
    let callerName = event.target.tagName;

    //for anything other than a table cell get out
    if(callerName.toLowerCase() != "td") return;

    //highlight cell
    event.target.classList.toggle("highlight");
}

function unHighlightCell(event) {
    let callerName = event.target.tagName;

    //for anything other than a table cell get out
    if(callerName.toLowerCase() != "td") return;

    //highlight cell
    event.target.classList.remove("highlight");
}

function showAnimals(){
    console.log("button clicked");
    let animalTDs = document.querySelectorAll("#animal-table td"); //this is selecting all of the css elements you specify in the quotations 

    let p = document.createElement("p");
    this.after(p);

    for(let animalTD of animalTDs) {
        p.innerHTML += animalTD.innerHTML + ", ";
    }
}

function stylePara() {
    let p = document.querySelector(".special");
    p.classList.toggle("highlight");
}
window.onload = function() {
    this.document.getElementById("animal-table").onmouseover = highlightCell; // you can also do addEventListener("mouseover", highlightCell) instead of onmouseover
    this.document.getElementById("animal-table").onmouseout = unHighlightCell;
    this.document.getElementById("btn-show").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click", stylePara);
}
}