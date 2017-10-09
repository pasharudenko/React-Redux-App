const mongoose = require('mongoose'); // library helping to work with mongo db
const Schema = mongoose.Schema; // To tell mongoose to very particular fields that we have
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    login: { type:String, unique: true, lowercase: true },
    email: { type:String, unique: true, lowercase: true },
    password: String
});

// On Save Hook, encrypt password
// Before saveing a model, run this function
userSchema.pre('save', function (next) {
    // get access to the user model
   const user = this;
    // generate a salt then run callback
   bcrypt.genSalt(10, function (err, salt) {
      if(err) { return next(err); }

      // hash (encrypt) our password using the salt
      bcrypt.hash(user.password, salt, null, function (err, hash) {
          if(err) { return next(err) }

          // overwrite plain text password with encrypted password
          user.password = hash;
          // Save the model now!
          next();
      });
   });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
     if(err) { return callback(err); }

     callback(null, isMatch);
  });
};


// Create the model class
const ModelClass = mongoose.model('user213', userSchema);

//Export the model
module.exports = ModelClass;
