//setup Express.js server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


//setup MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the MongoDB server');
    const db = client.db('todoApp');
    const tasksCollection = db.collection('tasks');
    //API routes here
    // Create a new task
app.post('/tasks', (req, res) => {
    
});

// Get all tasks
app.get('/tasks', (req, res) => {
    
});

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
    
});
   // Delete a task by ID
   app.delete('/tasks/:id', (req, res) => {
    
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new task
app.post('/tasks', async (req, res) => {
    try {
        const task = req.body;
        const result = await tasksCollection.insertOne(task);
        res.status(201).send(result.ops[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating the task');
    }


});


});

