const mongoose = require('mongoose')

// Define Event Schema (Embedded Document/Record)
const
  eventSchema = new Schema(
    {
      title: {type: String, required: true},
      startDate : String,
      endDate: String,
      image: String
    }
  );

  // Define Museum Schema (Parent Document/Record)
const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  workTime: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  events: [eventSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

// Compile our Models based on the Schema
const
  Museum = mongoose.model("Museum", museumSchema);
  Event = mongoose.model("Event", eventSchema);

// Export our Model for use
module.exports = { Museume, Event };