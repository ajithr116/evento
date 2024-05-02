// User.mjs
import mongoose from "mongoose";
import crypto from "crypto";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uniqueID: {
        type: String,
        default: function() {
          return crypto.randomBytes(3).toString('hex'); 
        }
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ''
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
});

export default mongoose.model('User', UserSchema);
