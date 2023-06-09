const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    required: true,
  },
  product: 
    {
      0: {
        type: String,
      },
      1: {
        type: String,
      },
      2: {
        type: Number
      },
      3: {
        type: String,
      },
      4: {
        type: String,
      },
      5: {
        type: Number
      },
      total: {
        type: Number,
      },
   
    }
  ,
  createAdd: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
});

module.exports = mongoose.model("UserModel", UserModel);
