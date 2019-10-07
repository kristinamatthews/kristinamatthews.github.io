"using strict"
function displayCount() {
// Loop from 1 to 10 and display numbers in the console


//create unordered list element
    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let i = 1;
    while(i <= 10) {
        //create list element 
        liElem = document.createElement("li");
        liElem.innerText = i;
        //append list element to ul element 
        ulElem.append(liElem);
        i++;
    }
    //append ul element to content
}

function displayLinks() {
    let linksElem = document.getElementById("links");
    for(let j = 1; j <= 5; j++){
        console.log(j);
        aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerText = `Page${j}`;
        aElem.href = `#${j}`;

    }
}

function displayTimesTables() {
    let tableElem = document.createElement("table");
    this.after(tableElem);

    //Loop through and create the rows
    for(let row = 1; row <= 10; row++) {
        let tableRow = document.createElement("tr");
        tableElem.append(tableRow);

        for(let col = 1; col <=10; col++){
            let tableCol = document.createElement("td");
            tableElem.append(tableCol);
            tableCol.innerHTML = row*col;
        }
    }
}

window.onload = function() {
    this.displayCount();
    this.displayLinks();

    let timesT = document.getElementById("times-tables");
    timesT.onclick = this.displayTimesTables;
}