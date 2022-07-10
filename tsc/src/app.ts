import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from '../connection';
import { userRouter } from './Router/userRouter';
import { profileRouter } from './Router/pofileRouter';
import { commentRouter } from './Router/commentRouter';
require('dotenv').config();


const PORT = process.env.PORT || 3000;


const app: Express = express();

app.use(bodyParser.json());
// app.use('/items', itemsRouter);
app.use('/users',userRouter);
app.use('/profiles',profileRouter);
app.use('/comments',commentRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
    AppDataSource.initialize()
   .then(()=>{
       console.log("DB Connected..");
   }).catch((e)=>{console.log("Error:"+e)});
});
