import { App } from '@config/application/app';
import '@config/env/dotenv.config';

const app = new App();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.startServer(port);
