import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/DB.mjs'
import adminRouter from './routes/admin/admin.mjs';
import userRoutes from './routes/users/users.mjs';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(express.json());

let tokenBlacklist = [];

connectDB();

app.use('/', userRoutes);

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.use('/admin', adminRouter);

app.get('/', async(req, res) => {
  return res.status(200).send("working2");
}); 

app.listen( process.env.PORT || 4000 , () => {
  console.log( "Server started successfully" );
})
