import express from 'express'
import bodyParser from 'body-parser'
import loginRouter from './src/routes/login.route.js'
import userRouter from './src/routes/user.route.js'
import registerRouter from './src/routes/register.route.js'
import cors from 'cors';
import UploadRouter from './src/routes/upload.route.js'
import RetriveImageUrl from './src/routes/imgurl.route.js';
import postRouter from './src/routes/post.route.js'



const app = express();

//Global middleware
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));



const corsOptions = {
  origin: ["http://localhost:5173"], // Allow only this origin
  methods: ['GET','POST','PATCH','PUT'], // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

// using user route

app.use("/api/user",userRouter);

app.use("/register",registerRouter);
app.use("/user",loginRouter);

app.use('/upload',UploadRouter);
app.use('/imgurl',UploadRouter);
app.use('/image',UploadRouter);

app.use('/retrive',RetriveImageUrl);
app.use('/upload',postRouter);
app.use('/post',postRouter);

app.use('/post',postRouter);
app.use('/post',postRouter);
app.use('/post',postRouter);
app.use('/post',postRouter);
app.use('/post',postRouter);
export default app;



