import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { Photo } from "./Photo"
import { User } from "./User"

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    // @ManyToOne(type => Student, student => student.projects) student: Student; 
    @Column("text")
    comment: string

    @ManyToOne(()=>Photo,{eager:true,onDelete:"CASCADE"})
    @JoinColumn()
    photo : Photo

  

    @ManyToOne(()=>User,{eager:true,onDelete:"CASCADE"})
    @JoinColumn()
    user : User
    
}
