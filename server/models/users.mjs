import mongoose from "mongoose";
import crypto from "crypto";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uniqueID: {
        type: String,
        default: function() {
          return crypto.randomBytes(3).toString('hex'); // Generate a random referral code
        }
    },
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
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
    }
});

module.exports = mongoose.model('User', UserSchema);
