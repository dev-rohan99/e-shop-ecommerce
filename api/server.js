// external modules import
import express from 'express';
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoDBConnect from './config/db.js';
import userRouter from './routes/userRouter.js';
import permissionRouter from './routes/permissionRouter.js';
import roleRouter from './routes/roleRouter.js';
import brandRouter from './routes/brandRouter.js';
import errorHandler from './middlewares/common/errorHandler.js';

const __dirname = path.resolve();

// implement modules
const app = express();
dotenv.config();

// middlewares implement
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin : ["https://e-shop-ecommerce-uk4l.onrender.com", "http://localhost:3000", "http://localhost:4000"],
    credentials : true
}));
app.use(cookieParser({ secure: false })); 

// mongoDB Connection
mongoDBConnect();

// static folder
app.use('/', express.static(path.join(__dirname, '/api/public')));

// routes implement
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/permissions', permissionRouter);
app.use('/api/v1/users/roles', roleRouter);
app.use('/api/v1/users/brands', brandRouter);

// error handler
app.use(errorHandler);

if (process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, '/front-end/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, 'front-end', 'dist', 'index.html'))
    );
}

// running server
const PORT = process.env.SERVER_PORT;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server running on ${PORT} PORT!`.bgGreen.black);
    }
});


