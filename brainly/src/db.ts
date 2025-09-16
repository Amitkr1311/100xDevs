import mongoose, { connect } from "mongoose";
import { Schema , Model} from "mongoose";
import { hash } from "zod";
import { required } from "zod/mini";

//mongoose.connect("<url>")

const UserSchema = new Schema({
    username:{type: String, required:true, unique:true},
    password:{type: String, required: true},
});

export const userModel =  mongoose.model("users", UserSchema);

// export default userModel;

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type : mongoose.Types.ObjectId, ref: "users", required: true}
})

export const ContentModel = mongoose.model("contents", ContentSchema);


const LinkSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, ref: "users", unique:true, required: true},
    hash: String
})

export const LinkModel = mongoose.model("Sharelinks", LinkSchema);
//export default {ContentModel, userModel};