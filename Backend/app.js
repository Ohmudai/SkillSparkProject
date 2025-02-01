import express from 'express'
import bodyParser from 'body-parser'
import loginRouter from './src/routes/login.route.js'
import userRouter from './src/routes/user.routes.js'
import registerRouter from './src/routes/register.route.js'
import cors from 'cors';
const app = express();

//Global middleware
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));



const corsOptions = {
  origin: ["http://localhost:5173"], // Allow only this origin
  methods: 'GET,POST', // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

// using user route

app.use("/api/user",userRouter);

app.use("/register",registerRouter);
app.use("/user",loginRouter);

export default app;



