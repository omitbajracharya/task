import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @OneToOne(()=>Profile,{eager:true,onDelete:"CASCADE"})
    @JoinColumn({name:"pid"})
    profile:Profile
}