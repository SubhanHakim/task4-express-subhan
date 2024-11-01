const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../config/swagger.config");

module.exports = (app) => {
  const auth = require("../middleware/auth.middleware");
  const router = require("express").Router();
  const book = require("../controllers/book.controler");

  /**
   * @swagger
   * tags:
   *  name: Book
   *  description: API for managing books
   */

  //   create book harus login
  router.post("/create", auth, book.createBook);

  //   get all book
  router.get("/books", book.getAllBook);

  //   get book by id
  router.get("/books/:id", book.getBookById);

  //   update book by id
  router.put("/books/:id", auth, book.updateBook);

  //   delete book by id
  router.delete("/books/:id", auth, book.deleteBook);

  app.use("/", router);
};
