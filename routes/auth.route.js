const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../config/swagger.config");
module.exports = (app) => {
  const router = require("express").Router();
  const authController = require("../controllers/authController");

  /**
   * @swagger
   * /signin:
   *  post:
   *    summary: Login a user
   *    tags:
   *      - Auth
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/Login'
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/LoginResponse'
   *      404:
   *        description: Login Failed
   */

  
  //   login
  router.post("/signin", async (req, res) => {
    try {
      await authController.signin(req, res);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.use("/", router);
};
