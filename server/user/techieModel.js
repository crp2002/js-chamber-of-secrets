const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-orm');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM - mongodb-orm');
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
userSchema.pre('save', function(next){
  var techie = this;
  bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) =>{
    bcrypt.hash(techie.password, salt, (error, hash) => {
      techie.password = hash;
      next();
    })
  });
});

const techieModel = mongoose.model('Techie', userSchema);

module.exports = techieModel;