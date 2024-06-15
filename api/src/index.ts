import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  return res.json('Hello');
});

app.listen(4000);
