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
import tagRouter from './routes/tagRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import productRouter from './routes/productRouter.js';
import errorHandler from './middlewares/common/errorHandler.js';
import {v2 as cloudinary} from 'cloudinary';

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
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

// mongoDB Connection
mongoDBConnect();

// static folder
app.use('/', express.static(path.join(__dirname, '/api/public')));

// routes implement
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/permissions', permissionRouter);
app.use('/api/v1/users/roles', roleRouter);
app.use('/api/v1/users/brands', brandRouter);
app.use('/api/v1/users/tags', tagRouter);
app.use('/api/v1/users/categories', categoryRouter);
app.use('/api/v1/users/products', productRouter);

// error handler
app.use(errorHandler);

if (process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, '/frontend-dashboard/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, 'frontend-dashboard', 'dist', 'index.html'))
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


