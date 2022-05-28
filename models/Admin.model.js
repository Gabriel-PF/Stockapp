const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const AdminSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("Admin", AdminSchema);

module.exports = Admin;