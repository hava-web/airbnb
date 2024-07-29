import express, { Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import { sign, verify } from 'jsonwebtoken';
import { UserModel } from './models/User';
require('dotenv').config();

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'dqwyhg7842niw823h9j9dudw9';

const corsOption: CorsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
};

//mongo user password: hE0LQmloS6dKnZwm
mongoose.connect(process.env.MONGO_URL ?? '');

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.get('/', (req: Request, res: Response) => {
  return res.json('Hello');
});

app.post('/register', async (req: Request, res: Response) => {
  const { name, email, password }: { name: string; email: string; password: string } = req.body;
  try {
    const userDoc = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/login', async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const userDoc = await UserModel.findOne({email});
  if(userDoc && userDoc.password)
  {
    const checkPassword = bcrypt.compareSync(password, userDoc.password);
    if(checkPassword)
    {
      sign(
        {
          id: userDoc._id,
          email: userDoc.email, 
          name: userDoc.name
        },
        jwtSecret, {}, (err, token) => {
        if(err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    }
    else
    {
      res.status(422).json('pass not ok');
    }
  }
  else
  {
    res.json('not found');
  }
})

app.get('/profile', async (req: Request, res: Response) => {
  const {token} = req.cookies;
  if(token)
  {
    verify(token, jwtSecret, {}, async (error, user: any) => {
      if(error) throw error;
      const UserDoc = await UserModel.findById(user.id)
      res.json(UserDoc)
    });
  }
  else
  {
    res.json(null)
  }
})

app.listen(4000);
