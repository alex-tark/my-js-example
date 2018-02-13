import * as mongoose from "mongoose";
import * as Promise  from "bluebird";
import * as _        from "lodash";
import ProfileSchema from "../model/profile-model";

ProfileSchema.static("findByBattleTag", (_battle_tag: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (!_battle_tag) { return reject(new TypeError("Battle tag is not valid object")); }

        let query = { battle_tag: _battle_tag };
        Profile.findOne(query, (error, profile) => {
            error
                ? reject(error)
                : resolve(profile)
        });
    });
});

let Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
