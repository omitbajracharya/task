import { DataSource } from "typeorm";
import { Photo } from "./src/entity/Photo";
import { Profile } from "./src/entity/Profile";
import { User } from "./src/entity/User";
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
    entities:[Photo,Profile,User],
    logging: false
   })
   
   