import { DataSource } from "typeorm";
import { Photo } from "./src/entity/Photo";
require('dotenv').config();
const uname = process.env.TYPEORM_USERNAME
const pwd=process.env.TYPEORM_PASSWORD 
const hostBy=process.env.TYPEORM_HOST
const db=process.env.TYPEORM_DATABASE
export const AppDataSource = new DataSource({
    type:"mysql",
    host:hostBy,
    port:3306,
    username: uname,
    password:pwd,
    database:db,
    synchronize:true,
    entities:[Photo],
    logging: true
   })
   AppDataSource.initialize()
   .then(()=>{
       console.log("DB Connected..");
   }).catch((e)=>{console.log("Error:"+e)});
   