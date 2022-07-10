import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string
    
    @ManyToOne(()=>User,{eager:true,onDelete:"CASCADE"})
    @JoinColumn({name:"uid"})
    user:User

}