const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/athletes',(req,res)=>{
    res.send(allAthletes);
});

app.post('/api/athletes', (req,res)=>{
    const schema = {
        FirstName:Joi.string().min(3).required(),
        LastName:Joi.string().min(4).required(),
        SportName:Joi.string().required(),
        LeagueName:Joi.string().required(),
        TeamName:Joi.string().required(),
    }

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const athlete = {
        id:allAthletes.length + 1,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        SportName : req.body.SportName,
        LeagueName : req.body.LeagueName,
        TeamName : req.body.TeamName,

    }
    console.log("name is: " + req.body.name);
    athletes.push(athlete);
    res.send(athlete);
});
















const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
});