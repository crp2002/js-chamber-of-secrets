var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const loginController = require('./user/loginController');
var app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(__dirname +'./../')); //serves the index.html

app.get('/home', (req, res) => {
    res.render('./../client/home.ejs')
})
app.post('/signup', loginController.createTechie);
app.post('/login', loginController.checkTechie);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'./../index.html'));
});

app.get('/Mode1', (req, res) => {
    res.sendFile(path.join(__dirname+'./../Mode1.html'));
});
app.get('/Mode2', (req, res) => {
    res.sendFile(path.join(__dirname+'./../Mode2.html'));
})

app.get('/build/home.webpack-bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname+'./../build/home.webpack-bundle.js'));
})

app.get('/build/page1.webpack-bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname+'./../build/page1.webpack-bundle.js'));
})

app.get('/build/page2.webpack-bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname+'./../build/page2.webpack-bundle.js'));
})

app.get('client/scss/application.scss', (req, res) => {
    res.sendFile(path.join(__dirname+'./../client/scss/application.scss'));
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

