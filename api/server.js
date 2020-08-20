const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/accounts', (req,res) => {
    db.()
})

server.post('/api/accounts', (req,res) => {
    
})

server.put('/api/accounts', (req,res) => {
    db.('accounts').where({id: })
    .update({name:})
})

server.delete('/api/accounts', (req,res) => {
    db.('accounts').where().del();
})



server.get('/', (req,res) => {
    res.send(`<h1>API is hehe!</h1>`)
});

module.exports = server;
