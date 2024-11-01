const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product.auth");
require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.config");
const swaggerUi = require("swagger-ui-express");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  method: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const swaggerSpec = swaggerJSDoc(swaggerConfig);
app.use(cors(corsOptions));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// call routes
require("./routes/auth.route")(app);
require("./routes/book.routes")(app);

app.use(
  "/api/products",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
  productRoutes
);

module.exports = app;
