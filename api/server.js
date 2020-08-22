const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/accounts', async (req,res, next) => {
   try {
       const accounts = await db.select("*").from("accounts")

    res.json(accounts)
   } catch (err) {
       next(err)
   }
})

server.get('/api/accounts/:id', async (req,res, next) => {
    try {
        const [account] = await db
        .select("*")
        .from("accounts")
        .where("id", req.params.id)
        .limit(1)
 
     res.json(account)
    } catch (err) {
        next(err)
    }
 })
server.post('/api/accounts', async (req,res,next) => {
    try {
        const [id] = await db
            .insert({
                name: req.body.name,
                budget: req.body.budget,
            })
            .into("accounts")

        const account = await db("accounts")
            .where("id", id)
            .first()

            res.status(201).json(account)
    } catch (err) {
        next(err)
    }
})

server.put('/api/accounts/:id', async (req,res,next) => {
   try {
       await db("accounts")
        .update({
            name: req.body.name,
            budget: req.body.budget,
        })
        .where("id", req.params.id)

        const account = await db("accounts")
            .where("id", req.params.id)
            .first()

            res.json(account)
   } catch (err) {
       next(err)
   }
})

server.delete('/api/accounts/:id', (req,res,next) => {
    try{
        await db("accounts")
            .where("id", req.params.id)
            .del()

            res.status(204).end()
    } catch (err) {
        next(err)
    }
})



server.get('/', (req,res) => {
    res.send(`<h1>API is hehe!</h1>`)
});

module.exports = server;
