// implement your API here
//console.log("index.js ran");//can test index.js connectivity to current terminal

const db = require('./data/hubs-model.js') // <<<1 import the database file

//import express from 'express'; // ES Modules - node js does not support this

const express = require("express"); //CommonJS Modules (import/Export in Node.js)

const server = express() //creates our server

server.get('/', (req, res)=> {
    //access to 2 things, request object, response object
res.send({api: "up and running..."})

} ) //handle get requests (but which url?, what code do you want to run when they request to the url)

//list of hubs GET /hubs <<<<2 implements endpoint

server.get('/hubs', (req, res) => {
    //get the list of hubs from the db
    db.find()
    .then(hubs => {
        res.status(200).json(hubs)//if you do not specify the status code, by default it will be 200, here we are making it clear that we wanted to
    })
    .catch(err=>{
        console.log("error on GET /hubs", err)
        res.status(500).json({errorMessage: "error getting list of hubs from database"}) //using json instead of send, so the next developer will have a visual indicator that you intend to send back json
    })
})

//add a hub

//remove a hub by id

//update a hub by id and the changes


const port = 4000;

server.listen(port, () => {
    console.log(`\n ** API running on port ${port} **\n`)
})