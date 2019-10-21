"using strict"
//First Example using an array
function displayFoods() {
    let foods = ["popcorn", "cherries"];
    let ulElem = document.createElement("ul");
    this.after(ulElem);

    for(let item of foods) {
        let liElem = document.createElement("li");
        ulElem.append(li);
        liElem.innerHTML = item;
    }
}

//Second example using an array
function displayFoods2() {
    //let foodPs = document.getElementsByClassName("food");
    let foodPs = document.getElementsByTagName("p");
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.innerHTML = "I like";
    for(let foodElem of foodPs){
        pElem.innerHTML += foodElem.innerHTML;
    }

}

//Third Example
function showRandom() {
    let num = Math.floor(Math.random*10+1);
}





window.onload = function() {

    let showFood = document.getElementById("show-foods");
    showFood.onclick = displayFoods;
    let listFood = document.getElementById("list-foods");
    listFood.onclick = displayFoods2;
    let showRandom = document.getElementById("numbers");
    showRandom.oncick = displayRandom;
}