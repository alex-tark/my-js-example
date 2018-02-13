import * as mongoose from "mongoose";
import * as Promise  from "bluebird";
import ProfileSchema from "../model/profile-model";

ProfileSchema.static("findByUsername", (_username: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (!_username) { return reject(new TypeError("Username is not valid object")); }

        let query = { username: _username };
        Profile.findOne(query, (error, profile) => {
            error
                ? reject(error)
                : resolve(profile)
        });
    });
});

let Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
