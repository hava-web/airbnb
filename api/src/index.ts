import express, { Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserModel } from './models/User';
require('dotenv').config();

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
// const bcryptSalt = bcrypt.genSalt(10);

const corsOption: CorsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
};

//mongo user password: hE0LQmloS6dKnZwm
mongoose.connect(process.env.MONGO_URL ?? '');

app.use(express.json());
app.use(cors(corsOption));

app.get('/', (req: Request, res: Response) => {
  return res.json('Hello');
});

app.post('/register', async (req: Request, res: Response) => {
  const { name, email, password }: { name: string; email: string; password: string } = req.body;
  const userDoc = await UserModel.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });

  res.json(userDoc);
});

app.listen(4000);
