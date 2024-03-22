const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const authSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        if (v.length >= 3) {
          return true;
        } else {
          return false;
        }
      },
      message: (props) => `${props.path} should be atleast three character`,
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        const regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const check = regex.test(v);
        if (check) {
          return true;
        } else {
          return false;
        }
      },
      message: (props) => `${props.path} is not valid`,
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const userData = mongoose.model("authentication", authSchema);

module.exports = userData;
