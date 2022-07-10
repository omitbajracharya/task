import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string
   
    @Column()
    photo: string
    
    @OneToOne(()=>User,{eager:true,onDelete:"CASCADE"})
    @JoinColumn({name:"uid"})
    user:User
}