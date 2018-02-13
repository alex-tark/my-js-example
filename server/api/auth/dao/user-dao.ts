import * as mongoose from "mongoose";
import * as Promise  from "bluebird";
import * as _        from "lodash";
import * as bcrypt   from 'bcrypt';
import UserSchema    from "../model/user-model";

UserSchema.static("findByUsername", (_username: string): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
    if (!_username) { return reject(new TypeError("Username is not valid object")); }

    let query = { username: _username };
    User.findOne(query, (error, user) => {
        error
          ? reject(error)
          : resolve(user);
      });
  });
});

UserSchema.static("createUser", (user: Object): Promise<any> => {
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

UserSchema.method("comparePassword", function(password, callback) {
  bcrypt.compare(password, this.password, (error, matches) => {
    if (error) { return callback(error, false); }
    callback(null, matches);
  });
});

let User = mongoose.model("User", UserSchema);

export default User;
