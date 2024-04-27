import mongoose from 'mongoose';
import crypto from "crypto";

const EventSchema = new mongoose.Schema({
    uniqueID: {
        type: String,
        default: function() {
          return crypto.randomBytes(3).toString('hex'); // Generate a random referral code
        }
    },
    title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  location: {
    type: String,
    trim: true,
    maxlength: 200
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: [{
    type: Date,
    required: true
    }]},
    {
    timestamps: true
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
