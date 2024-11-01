const { base, schema } = require("../models/auth.models");

const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentation Book Task4 Productzilla",
      version: "1.0.0",
      description: "API documentation for Book Task4 Productzilla",
      contact: {
        name: "Subhan Hakim",
        email: "subhanhakim07@gmail.com",
      },
    },
    basePath: "/",
    schemes: ["http", "https"],
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      components: schema.components,
      schemas: {
        Book: require("../models/book.models"),
        User: require("../models/auth.models"),
      },
    },
  },
  apis: ["./models/*.js", "./routes/*.js"],
};

module.exports = swaggerConfig;
