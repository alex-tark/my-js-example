import * as mongoose from 'mongoose';
import * as bcrypt   from 'bcrypt';

let schema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}
});

schema.pre("save", function(next) {
  let user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) { return next(error); }

      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) { return next(error); }

        user.password = hash;
        next();
      });
    });
  } else { return next(); }
});


export default schema;
