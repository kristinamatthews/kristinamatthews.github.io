"using strict"

function toggleNav() {
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden"); // adds and removes hidden from the classes
}
// 9-25-19
function toggleP() {
    console.log("toggling");

    const moreInfo = document.getElementById("more-info");
    //moreInfo.classList.toggle("hidden");
    moreInfo.hidden = !moreInfo.hidden;

    return false; // don't do default behavior
}

function validateFirstName() {
    //if the error is showing, remove it 
    let errorSpan = document.getElementById("error-first-name");

    if(errorSpan != null){
        errorSpan.remove();
    }

    
    // show an error when value is blank 
    if(this.value.trim() == "") {   //trim takes out the white space
        const errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan); // this.after puts it in "after" as am HTML element
    }
}


window.onload = function() {
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = this.toggleNav;

// 9-25-19

// hide more info paragraph on page load 
    const moreInfo = document.getElementById("more-info");
    //moreInfo.classList.add("hidden");
    moreInfo.hidden = true;

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = toggleP;

    const firstNameText = document.getElementById("txt-first-name");
    firstNameText.addEventListener("keyup", validateFirstName);
}
