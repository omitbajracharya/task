import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
import bodyParser from 'body-parser';
import { DataSource } from "typeorm";
import { Photo } from './entity/Photo';
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

export const AppDataSource = new DataSource({
 type:"mysql",
 host:"localhost",
 port:3306,
 username:"root",
 password:"",
 database:"orm_db",
 synchronize:true,
 entities:[Photo],
 logging: true
})
AppDataSource.initialize()
.then(()=>{
    console.log("DB Connected..");
}).catch((e)=>{console.log("Error:"+e)});

app.use(bodyParser.json());
app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});