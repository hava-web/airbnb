import express, { Request, Response } from 'express';

import cors, { CorsOptions } from 'cors';

const app = express();

const corsOption: CorsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
};

app.use(express.json());
app.use(cors(corsOption));

app.get('/', (req: Request, res: Response) => {
  return res.json('Hello');
});

app.post('/register', (req: Request, res: Response) => {
  const { name, email, password }: { name: string; email: string; password: string } = req.body;
  res.json({ name, email, password });
});

app.listen(4000);
