"using strict"

function displayQuotes() {

    let quotes = ['The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill',
    'Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers',
    'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. – Inspirational Quote By Vince Lombardi',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs']
    
    
    for(let quote of quotes) {
        let newQuote = document.getElementById("output1");
        newQuote.innerHTML = quote;
        this.append(newQuote);
    }

}

function lotteryNumber() {
    let numbers = [document.getElementsByClassName("input").value];
    for(let i = 0; i<5; i++){
        let num = Math.floor(Math.random*10+1);
        let lotNum = document.getElementById("output2");
        lotNum.innerHTML = num;

        if(numbers.value == num) {
            this.after(input);
            let match = document.createElement("span");
            match.innerHTML = "match";
        }
        else if(numbers.value != num){
            this.after(input);
            let match = document.createElement("span");
            match.innerHTML = "not a match";
        }
    }
    if(numbers = num){
        let finalResult = document.getElementById("output3");
        finalResult.innerHTML = "You win!";
    }
    else {
        let finalResult = document.getElementById("output3");
        finalResult.innerHTML = "Better luck next time!";
    }
}















window.onload = function() {
    var myVar = setInterval(displayQuotes, 2000);

    let displayLottery = document.getElementById("btn-result");
    displayLottery.onclick = lotteryNumber;
}