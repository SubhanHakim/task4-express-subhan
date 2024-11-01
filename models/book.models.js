const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object  
 *      required:
 *        - title
 *        - description
 *        - author
 *        - year
 */

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

bookSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Book", bookSchema);
