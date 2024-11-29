import express, { Express } from "express";
import userRouter from "@modules/users/routes/userRoutes";
import setupSwagger from "@core/documentation/swagger";
import config from "@config/env/dotenvConfig";
import MongoConnection from "@config/database/mongoConnect";

const app: Express = express();
const port = config.port;

const configureMiddlewares = (app: Express) => {
  app.use(express.json());
};

const configureRoutes = (app: Express) => {
  setupSwagger(app);
  app.use(userRouter);
};

const startServer = async () => {
  try {
    await MongoConnection.connect();
    configureMiddlewares(app);
    configureRoutes(app);

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
