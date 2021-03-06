const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const server = express();
const path = require('path');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/home', (req,res) => {
    res.sendFile(`${__dirname}/home.html`);
});

server.get('/reviews', (req,res) => {
    res.sendFile(`${__dirname}/reviews.html`);
});

server.get('/main.css', (req,res) => {
    res.sendFile(`${__dirname}/main.css`);
});

server.get('/home.js', (req,res) => {
    res.sendFile(`${__dirname}/home.js`);
});

server.get('/reviews.js', (req,res) => {
    res.sendFile(`${__dirname}/reviews.js`);
});

server.get('/calls.js', (req,res) => {
    res.sendFile(`${__dirname}/reviews.js`);
});

server.get('/image_logo.png', (req,res) => {
    res.sendFile(`${__dirname}/image_logo.png`);
});

server.get('/coding_video.webm', (req,res) => {
    res.sendFile(`${__dirname}/coding_video.webm`);
});

server.listen(3000);