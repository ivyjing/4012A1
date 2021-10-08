//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying a port to listen on localhost:9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Hi from the express server! Please go to localhost:9000/api/penguins or /bears");
});

app.get('/api/penguins', (req, res) => {

    //call to db

    //return dummy data
    const penguins = ["Live almost exclusively in the southern hemisphere", 
    "The largest living species is the emperor penguin", 
    "Penguins evolved to fly underwater",
    "A penguin’s thick feathers aren’t the only way this bird stays warm",
    "Penguins live in many locations and habitats",
    "Penguin feet are adapted to walk long distances",
    "Many male penguins gift female penguins with rocks in order to woo them",
    "Penguin is one of the most streamlined animals in the world",
    "Penguins poop every 20 minutes",
    "Penguins are expert divers"];
    
    //sending a response should be in JSON
    res.send(JSON.stringify(penguins));
}); //this part for A1

app.get('/api/bears', (req, res) => {

    //call to db

    //return dummy data
    const bears = ["Pandas Have an Extra Bone Just for Eating", 
    "Sloth Bears Use Their Lips Like a Vacuum", 
    "Brown Bears Are the Most Widespread",
    "'Grolar' and 'Pizzly' Bears Are Appearing",
    "Black Bears Are Not Always Black",
    "White Bears Have Cultural Significance",
    "Panda Babies Are Shockingly Small",
    "Polar Bears Are Marine Mammals",
    "Only 1 Bear Species Lives in the Southern Hemisphere",
    "Sun Bears Are (Falsely) Thought To Have Medicinal Properties(bonus!)"];
    
    //sending a response should be in JSON
    res.send(JSON.stringify(bears));
});


//running the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on port", port);
});

