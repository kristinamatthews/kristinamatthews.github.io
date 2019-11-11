const express = require('express');
const app = express();
const allAthletes = require('./athletes');

app.use(express.static('public'));

// server.set('port', process.env.PORT || 3000); 


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/athletes',(req,res)=>{
    res.send(allAthletes);
});

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
});