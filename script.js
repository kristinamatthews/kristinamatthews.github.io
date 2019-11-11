async function showAthletes(){
    console.log("hello world");
    let response = await fetch("/api/athletes");
    let athletesJson = await response.json();
    console.log(athletesJson);

    let contentDiv = document.getElementById("content");

    let athletes;

    for(i in athletesJson){
        athletes = athletesJson[i];
    }

    for(i in athletes){
        let athlete = athletes[i];
        console.log(athlete);
        contentDiv.append(makeAthleteElem(athlete));
    }
}



function makeAthleteElem(athlete){
    let aElem = document.createElement("div");
    aElem.classList.add("athlete");
    aH2 = document.createElement("h2");
    aH2.innerHTML = athlete.firstname + athlete.lastname;
    aElem.append(aH2);
    aP = document.createElement("p");
    aP.innerHTML = `Athlete ${athlete.firstname} ${athlete.lastname} is a ${athlete.league} ${athlete.sport} player for the ${athlete.team} playing the position of ${athlete.position}. His/Her birthday is ${athlete.birthday}.`;
    aElem.append(aP);
    aImage = document.createElement("img");
    console.log(athlete.picture);
    console.log("http://localhost:4000/" + athlete.picture);
    aImage.src = "http://localhost:4000/" + athlete.picture;
    aElem.append(aImage);


    return aElem;
}




window.onload = function() {
    console.log("Hello World");
    this.showAthletes();
}