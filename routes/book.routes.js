const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../config/swagger.config");

module.exports = (app) => {
  /**
   * @swagger
   * /create:
   *   post:
   *     summary: Add new book to the DB
   *     description: Membuat buku baru ke database
   *     security:
   *      - bearerAuth: []
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              title:
   *                type: string
   *                example: "Judul Buku"
   *              description:
   *                type: string
   *                example: "Deskripsi Buku"
   *              author:
   *                type: string
   *                example: "Penulis Buku"
   *              year:
   *                type: number
   *                example: 2024
   *     responses:
   *       200:
   *         description: Book created successfully
   *       400:
   *         description: Bad request
   */

  /**
   * @swagger
   * /books:
   *    get:
   *     summary: Get all books
   *     description: Mengambil semua buku dari database
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Not Found
   */

  /**
   * @swagger
   * /books/{id}:
   *    get:
   *     summary: Get book by id
   *     description: Mengambil buku berdasarkan id
   *     parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        schema:
   *        description: ID buku yang ingin diambil
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Not Found
   */

  /**
   * @swagger
   * /books/{id}:
   *    put:
   *     summary: Update book by id
   *     description: Mengubah buku berdasarkan id
   *     security:
   *      - bearerAuth: []
   *     parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        schema:
   *          description: ID buku yang ingin diubah
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              title:
   *                type: string
   *                example: "Judul Buku"
   *              description:
   *                type: string
   *                example: "Deskripsi Buku"
   *              author:
   *                type: string
   *                example: "Penulis Buku"
   *              year:
   *                type: number
   *                example: 2024
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Not Found
   */

  /**
   * @swagger
   * /books/{id}:
   *    delete:
   *     summary: Delete book by id
   *     description: Menghapus buku berdasarkan id
   *     security:
   *      - bearerAuth: []
   *     parameters:
   *      - in: path
   *        name: id
   *        required: true
   *        schema:
   *          description: ID buku yang ingin dihapus
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Not Found
   */




  const auth = require("../middleware/auth.middleware");
  const router = require("express").Router();
  const book = require("../controllers/book.controler");



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
