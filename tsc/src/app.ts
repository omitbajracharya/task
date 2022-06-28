import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
import bodyParser from 'body-parser';
require('dotenv').config();


const PORT = process.env.PORT || 3000;


const app: Express = express();

app.use(bodyParser.json());
app.use('/items', itemsRouter);
// app.use('/users',userRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
