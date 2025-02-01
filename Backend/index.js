import express from 'express'
import dotenv from 'dotenv'
import app from './app.js';
import { connectDb } from './config/database.js';

dotenv.config();

connectDb();


const port =  process.env.PORT || 3000;



app.get('/',(req,res)=>{
  res.send('the backend is running');
});

app.listen(port,()=>{
  console.log(`The server is running at: http://localhost:${port}`);
})