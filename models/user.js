const mongoose = require('mongoose'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
   createdAt: { type: Date },
   updatedAt: { type: Date },
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   first: { type: String, required: false },
   last: { type: String, required: false }
});

UserSchema.pre("save", function(next) {
   // SET createdAt AND updatedAt
   var now = new Date();
   this.updatedAt = now;
   if (!this.createdAt) {
     this.createdAt = now;
   }

   // ENCRYPT PASSWORD
   var user = this;
   if (!user.isModified("password")) {
     return next();
   }
   bcrypt.genSalt(10, function(err, salt) {
    console.log(err)
     bcrypt.hash(user.password, salt, function(err, hash) {
       user.password = hash;
       return next();
     });
   });
});

UserSchema.methods.comparePassword = function(password, done) {
   bcrypt.compare(password, this.password, function(err, isMatch) {
     done(err, isMatch);
   });
};

module.exports = mongoose.model("User", UserSchema);
