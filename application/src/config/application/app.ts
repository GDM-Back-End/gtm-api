import express from "express";
import cors from "cors";
import { MongoConnection } from "@config/database/mongodb.config";
import { userRouter } from '@modules/users/routes/user.routes';
import setupSwagger from "@core/documentation/swagger";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  configureRoutes() {
    setupSwagger(this.app);
    this.app.use(userRouter);
  }

  async startServer(port: number) {
    try {
      await MongoConnection.connect();
      this.configureMiddlewares();
      this.configureRoutes();
      
      this.app.listen(port, () => {
        console.log("Server started on port:", port);
      });
    } catch (error) {
      console.log("Error starting server:", error);
      process.exit(1);
    }
  }
}

export { App };
