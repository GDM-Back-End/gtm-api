import { Request, Response, NextFunction } from 'express';

const exampleMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log('Example middleware');
  next();
};

export { exampleMiddleware };
