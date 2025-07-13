require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use environment variables for MongoDB credentials
const MONGO_URL = process.env.MONGO_URL || "mongodb://ayesha:ayesha%400101@mongo:27017";
const DB_NAME = process.env.DB_NAME || "ayesha-db";

let client;
let db;

// Connect to MongoDB once at server startup
async function connectToMongo() {
    if (!client || !client.topology || !client.topology.isConnected()) {
        client = new MongoClient(MONGO_URL);
        await client.connect();
        db = client.db(DB_NAME);
        console.log('Connected successfully to MongoDB');
    }
}

// GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await connectToMongo();
        const data = await db.collection('users').find({}).toArray();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to fetch users' });
    }
});

// POST new user
app.post("/addUser", async (req, res) => {
    try {
        await connectToMongo();
        const userObj = req.body;
        // Basic validation
        if (!userObj.email || !userObj.username || !userObj.password) {
            return res.status(400).send({ error: 'Missing required fields' });
        }
        const result = await db.collection('users').insertOne(userObj);
        res.send({ message: 'User added', id: result.insertedId });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to add user' });
    }
});

// Graceful shutdown
process.on('SIGINT', async () => {
    if (client) await client.close();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});