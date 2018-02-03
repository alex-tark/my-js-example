import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import * as bcrypt   from 'bcrypt';
import userSchema from "../model/user-model";

userSchema.pre("save", function(next) {
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

userSchema.static("comparePassword", (password, callback) => {
  bcrypt.compare(password, this.password, (error, matches) => {
    if (error) { return callback(error); }
    callback(null, matches);
  });
});

userSchema.static("getByUsername", (_username: string): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
    if (!_username) { return reject(new TypeError("Username is not valid object")); }

    let query = { username: _username };
    User.findOne(query)
      .exec((error, user) => {
        error
          ? reject(error)
          : resolve(user);
      });
  });
});

userSchema.static("createUser", (user: Object): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
    if (!_.isObject(user)) { return reject(new TypeError("User is not valid object")); }

    var _user = new User(user);
    _user.save((error, user) => {
        error
          ? reject(error)
          : resolve(user);
      });
  });
});

let User = mongoose.model("User", userSchema);

export default User;
