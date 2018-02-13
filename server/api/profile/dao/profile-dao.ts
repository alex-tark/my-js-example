import * as mongoose from "mongoose";
import * as Promise  from "bluebird";
import * as _        from "lodash";
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

ProfileSchema.static("createProfile", (_profile: Object): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(_profile)) { return reject(new TypeError('Profile is not valid object')); }

        let profile = new Profile(_profile);
        profile.save((error, profileSaved) => {
            error
                ? reject(error)
                : resolve(profileSaved);
        });
    })
});

let Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
