const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));


const athletes = [
    {id:1,firstname:"Russell",lastname:"Westbrook",sport:"Basketball",league:"NBA",team:"Houston Rockets"},
    {id:2,firstname:"Kevin",lastname:"Durant",sport:"Basketball",league:"NBA",team:"Brooklyn Nets"},
    {id:3,firstname:"Skylar",lastname:"Diggins-Smith",sport:"Basketball",league:"WNBA",team:"Dallas Wings"},
    {id:4,firstname:"Tom",lastname:"Brady",sport:"Football",league:"NFL",team:"New England Patriots"},
    {id:5,firstname:"A'ja",lastname:"Wilson",sport:"Basketball",league:"WNBA",team:"Las Vegas Aces"},
    {id:6,firstname:"Kobe",lastname:"Bryant",sport:"Basketball",leauge:"NBA",team:"LA Lakers"},
]


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/athletes',(req,res)=>{
    res.send(athletes);
});

app.get('/api/athletes/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const athlete = athletes.find(s =>s.id === requestedId);

    if(!athlete) {
        res.status(404).send(`The athlete with id ${requestedId} can not be found`);
        return;
    }

    res.send(athlete);
});

function validateAthlete(athlete){
    const schema = {
        firstname:Joi.string().min(3).required(),
        lastname:Joi.string().min(4).required(),
        sport:Joi.string().required(),
        league:Joi.string().required(),
        team:Joi.string().required(),
    }

    return Joi.validate(athlete, schema);
}

app.post('/api/athletes', (req,res)=>{

    const result = validateAthlete(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const athlete = {
        id:athletes.length + 1,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        sport:req.body.sport,
        league:req.body.league,
        team:req.body.team

    }
    athletes.push(athlete);
    res.send(athlete);
});

//update an athlete
app.put('/api/athletes/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const athlete = athletes.find(s =>s.id === requestedId);

    if(!athlete) {
        res.status(404).send(`The athlete with id ${requestedId} can not be found`);
        return;
    }

    const result = validateAthlete(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update
    athlete.firstname = req.body.firstname;
    athlete.lastname = req.body.lastname;
    athlete.sport = req.body.sport;
    athlete.league = req.body.league;
    athlete.team = req.body.team;
    res.send(athlete);

});

app.delete('/api/athletes/:id',(req,res)=>{
    const requestedId = parseInt(req.params.id);
    const athlete = athletes.find(s =>s.id === requestedId);

    if(!athlete) {
        res.status(404).send(`The athlete with id ${requestedId} can not be found`);
        return;
    }

    //if it does exist, go and delete it
    let index = athletes.indexOf(athlete);
    athletes.splice(index,1);
    res.send(athlete);
});


//listening 
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
});