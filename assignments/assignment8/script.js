"using strick"

function displayAscii() {
    let word = document.getElementById("word-input").value;
    word = word.trim();
    const ascii = document.getElementById("output1");

    for(let i = 0; i < word.length; i++) {
        ascii.innerHTML += word.charCodeAt(i);

        if(i < word.length-1) {
            ascii.innerHTML +=", ";
        }
    }
}


function sumEvenNumbers() {
    const inputNum = document.getElementById("number-input").value;
    let evenNumber = document.getElementById("output2");
    
    let sum = 0;
    for(let i = 0; i <= inputNum; i+=2) {
        sum = sum + i;
    }
    console.log("working");
    evenNumber.innerText = "Sum: " + sum;

}

window.onload = function() {
    const showAscii = document.getElementById("btn-result1");
    showAscii.onclick = displayAscii;

    const showEven = document.getElementById("btn-result2");
    showEven.onclick = sumEvenNumbers;
}