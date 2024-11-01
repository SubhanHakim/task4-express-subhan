const Book = require("../models/book.models");

// create book
exports.createBook = async (req, res) => {
  try {
    const { title, description, author, year } = req.body;

    // check apabila book sudah ready
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ message: "Book already exists" });
    }

    // creat book
    const newBook = new Book({ title, description, author, year });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all book
exports.getAllBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get book by id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update Book
exports.updateBook = async (req, res) => {
  try {
    const { title, description, author, year } = req.body;

    const updateBook = await Book.findByIdAndUpdate(req.params.id, {
      title,
      description,
      author,
      year,
    });
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete book byid
exports.deleteBook = async (req, res) => {
    try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
    }
}
