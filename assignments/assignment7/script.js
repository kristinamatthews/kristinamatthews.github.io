"using strict"

//let buttons work once page loads 
window.onload = function() {
    const btnResult = document.getElementById("btn-result1");
    const btnResult2 = document.getElementById("btn-result2");
    const btnResult3 = document.getElementById("btn-result3");
    // TODO remeber to call names of functions; connect to button
    btnResult.onclick = this.getAge;
    btnResult2.onclick = this.showLanguage;
    btnResult3.onclick = this.makePlural;
}

//First function to determine which age is older

function getAge() {
    console.log("get age started")
    let firstName = document.getElementById("name1").value;
    let secondName = document.getElementById("name2").value;
    let thirdName = document.getElementById("name3").value;
    let firstAge = document.getElementById("age1").value;
    let secondAge = document.getElementById("age2").value;
    let thirdAge = document.getElementById("age3").value;
    let resultP = document.getElementById("output1");

    Number(firstAge);
    Number(secondAge);
    Number(thirdAge);
    if(firstAge > secondAge && thirdAge > secondAge && firstAge > thirdAge) {
        console.log("first, then third, then second");
        resultP.textContent =`Oldest to youngest: ${firstName}, ${thirdName}, ${secondName}`;
    }
    else if(firstAge > secondAge && firstAge > thirdAge) {
        console.log("first age is bigger");
        resultP.textContent =`Oldest to youngest: ${firstName}, ${secondName}, ${thirdName}`;
    }
    else if(secondAge > firstAge && thirdAge > firstAge && secondAge > thirdAge) {
        console.log("second, third, first");
        resultP.textContent =`Oldest to youngest: ${secondName}, ${thirdName}, ${firstName}`;
    }
    else if(secondAge > thirdAge && secondAge > firstAge) {
        console.log("second, first, third");
        resultP.textContent =`Oldest to youngest: ${secondName}, ${firstName}, ${thirdName}`;
    }
    else if(thirdAge > firstAge && firstAge > secondAge) {
        console.log("third, first, second");
        resultP.textContent =`Oldest to youngest: ${thirdName}, ${firstName}, ${secondName}`;
    }
    else if(thirdAge > secondAge && thirdAge > firstAge) {
        console.log("third, second, first");
        resultP.textContent =`Oldest to youngest: ${thirdName}, ${secondName}, ${firstName}`;
    }
}

function showLanguage() {
    console.log("show language started");
    let langChoice = document.getElementById("language").value;
    let result2 = document.getElementById("output2");
    langChoice = langChoice.toLowerCase().trim();

    if(langChoice == "") {
        console.log("No language entered");
        result2.textContent = "Please eneter a language";
    }
    else if(langChoice === "spanish") {
        console.log("Spanish");
        result2.textContent = " Hola Mundo! "
    }
    else if(langChoice === "french") {
        console.log("French");
        result2.textContent = " Bonjour le monde! ";
    }
    else if(langChoice === "german") {
        console.log("German");
        result2.textContent = " Hallo Welt! ";
    }
    else if(langChoice === "latin") {
        console.log("Latin");
        result2.textContent = " salve Orbis Terrarum! "
    }
    else {
        result2.textContent = "Please choose one of the four: Spanish, French, German or Latin.";
    }
}

function makePlural() {
    console.log("make plural started");
    let numofItems = document.getElementById("numofItems").value;
    let itemName = document.getElementById("nameofItem").value;
    let result3 = document.getElementById("output3");
    Number(numofItems);
    if(numofItems == 0 || "") {
        console.log("Number was 0");
        result3.textContent = "Please enter a number.";
    }
    else if(numofItems == 1) {
        console.log("Number was 1");
        result3.textContent = `You ordered one ${itemName}`;
    }
    else if(numofItems > 1) {
        console.log("Making plural");
        result3.textContent = `You ordered ${numofItems} ${itemName}s`
    }
}

