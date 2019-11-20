/*async function showAthletes(){
    console.log("hello world");
    let response = await fetch('/api/athletes');
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
}*/

async function showAthletes(){
    let athletesJson = await fetch('api/athletes');
    let athletes = await athletesJson.json();
    let athletesDiv = document.getElementById("content");
    athletesDiv.innerHTML = "";

    for(i in athletes){
        athletesDiv.append(makeAthleteElem(athletes[i]));
    }
}

async function showAthlete(){
    let id = document.getElementById("input-athlete-id").value;
    let response = await fetch(`api/athletes/${id}`);
    let athlete = await response.json();

    let aElem = document.getElementById("athlete");
    aElem.append(makeAthleteElem(athlete));
}

function makeAthleteElem(athlete){
    let aElem = document.createElement("div");
    aElem.classList.add("athlete");
    aH2 = document.createElement("h2");
    aH2.innerHTML = athlete.firstname +" " + athlete.lastname;
    aElem.append(aH2);
    aP = document.createElement("p");
    aP.innerHTML = `Athlete ${athlete.firstname} ${athlete.lastname} is a ${athlete.league} ${athlete.sport} player for the ${athlete.team}.`;
    aElem.append(aP);

    
    //create edit and delete links
    let editLink = document.createElement("a");
    editLink.href = "#edit-athlete-form";
    editLink.innerHTML = "Edit";
    editLink.setAttribute("data-id", athlete.id);
    editLink.onclick =showEditAthlete; //pay attention
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.setAttribute("data-id", athlete.id); //create athlete id 
    deleteLink.onclick = deleteAthlete; //pay attention
    aP.append(editLink);
    aP.append(deleteLink);

    aElem.append(aH2);
    aElem.append(aP);


    return aElem;
}

async function showEditAthlete(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-athlete-id").innerHTML = id;

    let response = await fetch(`api/athletes/${id}`);
    let athlete = await response.json();
    document.getElementById("edit-athlete-first-name").value = athlete.firstname;
    document.getElementById("edit-athlete-last-name").value = athlete.lastname;
    document.getElementById("edit-athlete-sport-name").value = athlete.sport;
    document.getElementById("edit-athlete-league-name").value = athlete.league;
    document.getElementById("edit-athlete-team-name").value = athlete.team;

    return false;
}

async function deleteAthlete(){
    const id = this.getAttribute("data-id");
    
    let response = await fetch(`/api/athletes/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting athlete");
        return;
    }

    showAthletes();
    return false;
}

async function addAthlete(){
    //get the athlete inforamtion
    const FirstName = document.getElementById("athlete-first-name").value;
    const LastName = document.getElementById("athlete-last-name").value;
    const SportName = document.getElementById("athlete-sport-name").value;
    const LeagueName = document.getElementById("athlete-league-name").value;
    const TeamName = document.getElementById("athlete-team-name").value;

    console.log(`you are adding ${FirstName}, ${LastName}, ${SportName}, ${LeagueName}, ${TeamName}`);

    let newAthlete = {"FirstName":FirstName, "LastName":LastName, "SportName":SportName, "LeagueName":LeagueName, "TeamName":TeamName};

    let response = await fetch('/api/athletes/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body:JSON.stringify(newAthlete),
    });

    if(response.status != 200){
        console.log("Error adding athlete");
        return;
    }

    let result = await response.json();
    showAthletes();
}

async function editAthlete(){
    let id = document.getElementById("edit-athlete-id").textContent;
    let FirstName = document.getElementById("edit-athlete-first-name").value;
    let LastName = document.getElementById("edit-athlete-last-name").value;
    let SportName = document.getElementById("edit-athlete-sport-name").value;
    let LeagueName = document.getElementById("edit-athlete-league-name").value;
    let TeamName = document.getElementById("edit-athlete-team-name").value;
    let athlete = {"First Name":FirstName, "Last Name":LastName, "Sport Name":SportName, "League Name":LeagueName, "Team Name":TeamName};

    let response = await fetch(`/api/athletes/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(athlete),
    });

    if(response.status != 200){
        console.log("Error edditing athlete");
    }

    //update the list of athletes
    showAthletes();
}




window.onload = function() {
    this.showAthletes();
    let addAthleteButton = document.getElementById("btn-add-athlete");
    addAthleteButton.onclick = addAthlete;

    let showAthleteButton = document.getElementById("btn-show-athlete");
    showAthleteButton.onclick = showAthlete;

    let editAthleteButton = document.getElementById("btn-edit-athlete");
    editAthleteButton.onclick = editAthlete;
}