import { Express } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const descriptionPath = path.resolve(__dirname, "./description.txt");
const description = fs.readFileSync(descriptionPath, "utf8");
const swaggerDocs = path.resolve(__dirname, "./swaggerDocs.ts");

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Titulo API",
      version: "1.0.0",
      description,
      contact: {
        email: "graciano@gdigitalmkt.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "API de teste",
      },
      {
        url: "https://www.site.com/",
        description: "API de produção",
      },
    ],
  },
  apis: [swaggerDocs],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = async (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
