
const Techie = require('./techieModel');
const bcrypt = require('bcryptjs');
const loginController = {};

loginController.createTechie = (req, res) => {
    var techie = new Techie({
        username: req.body.username,
        password: req.body.password
    });
    techie.save(err => {
        if (err) {
            res.render('./../client/signup', { error: 'This is an error' });
        } else {
            console.log('we are in')
            Techie.findOne({ username: req.body.username }, (err, foundTechie) => {

                 res.redirect('/');
            })
        }
    })
}

loginController.checkTechie = (req, res) =>{
    Techie.findOne({username: req.body.username}, (err, foundTechie) => {
        if(err || !foundTechie){
            // res.render('./../client/signup', { error: 'Invalid username or password ' });
            console.log('------- there was an error')
            return res.redirect('/home');
        }
        bcrypt.compare(req.body.password, foundTechie.password, (err, isMatch) =>{
            if(err){
                //throw err;
            return res.redirect('/home')
            } 
            if(isMatch){
                res.redirect('/');
            }
            else{
                res.redirect('/home');
            }
        })
        
    })
}
module.exports = loginController;