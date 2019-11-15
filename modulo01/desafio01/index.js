const express = require('express');

const server = express();

server.use(express.json());

let numberOfRequests = 0;
const projects = [];

/**
 * Middleware to verify if sended id from project exists
 */
function verifyProjectExists (req, res, next) {
    const { id } = req.params;

    const project = projects.find(x =>x.id == id);

    if(!project) return res.status(400).json({error: 'Project not found' });

    return next(); 
};

/**
 * Middleware to count the number of requests API received
 */
function countRequests (req, res, next) {
    numberOfRequests++;

    console.log(`Number of requests sent to API: ${numberOfRequests}`);

    return next(); 
};

server.use(countRequests);

/**
 * Method to add a new project 
 */
server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    const item = {
        id,
        title,
        tasks: []
    };

    projects.push(item);

    return res.json(projects);
});

/**
 * Method to return all projects
 */
server.get('/projects', (req, res) => {
    return res.json(projects);
});

/**
 * Method to change the project title
 */
server.put('/projects/:id', verifyProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(x => x.id === id);

    project.title = title;
 
    return res.json(project);
});

/**
 * Method to delete a project 
 */
server.delete('/projects/:id', verifyProjectExists, (req, res) => {
    const { id } = req.params;

    const index = projects.findIndex(x => x.id == id)

    projects.splice(index, 1)

    return res.send();
});

/**
 * Method to add a new task to array from tasks of a project 
 */
server.post('/projects/:id/tasks', verifyProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(x => x.id == id);

    project.tasks.push(title);

    return res.json(project);
});

server.listen(3000);