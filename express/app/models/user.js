const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookingSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  museum: {
    type: Schema.Types.ObjectId,
    ref: "Museum",
    required: true
  },
  num_guest: {
    type: Number,
    required: true
  },
  
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  bookings:[bookingSchema],
  token: String
}, 
{
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

userSchema.virtual('museums', {
  ref: 'Museum',
  localField: '_id',
  foreignField: 'owner'
});

// Compile our Models based on the Schema
const
 User = mongoose.model("User", userSchema);
 Booking = mongoose.model("Booking", bookingSchema);

 // Export our Model for use
 module.exports = { User, Booking };
