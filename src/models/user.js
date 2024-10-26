const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, 'Please enter a valid phone number']
  },
  birthDate: {
    type: Date,
    required: true
  },
  profile: {
    type: String, // Could be a URL or path to the profile image
    default: ''
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    streetAddress: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    region: {
      type: String,
      trim: true
    },
    postalCode: {
      type: String,
      required: true,
      match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid postal code']
    }
  },
  password: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
