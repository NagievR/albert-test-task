import express, { Application } from 'express';
import router from './routes';

import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use('/api', router);

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, ():void => console.log(`Server started on port ${PORT}`));
