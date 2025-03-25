/** 
import mongoose from 'mongoose';
import config from '@config/env/dotenv.config';

class MongoConnection {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(config.databaseUrl);
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }

  static async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log('MongoDB disconnected');
    } catch (err) {
      console.error(err.message);
    }
  }
}

export { MongoConnection };
*/
