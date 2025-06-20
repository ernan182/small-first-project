import express from 'express';
import morgan from 'morgan';
import AuthRoute from './routes/user.route.js';
import ApplicationRoute from './routes/application.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { fileFilter, fileStorage } from './libs/imgConfing.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

//
//Heres all the libraries I use for my babckend 
//

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173',
}))
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(
  // Putting thet parameters for my image  where is gonna save , its filter and finally the size 😼😼
  multer({ storage: fileStorage, fileFilter: fileFilter , limits:{fieldSize: 5 * 1024 * 1024}}).single('image')
);

app.use('/api/img', express.static(path.join(__dirname, '/img')));
app.use('/api',AuthRoute);
app.use('/api',ApplicationRoute);


export default app;
