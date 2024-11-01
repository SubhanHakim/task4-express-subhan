const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object  
 *      required:
 *        - name
 *        - password
 */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.method("toJSON", function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("User", userSchema);
