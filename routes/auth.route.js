module.exports = (app) => {
  const router = require("express").Router();
  const authController = require("../controllers/authController");

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
