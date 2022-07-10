import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from "typeorm"
import { User } from "./User"

@Entity()
export class Friends extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    // @ManyToOne(type => Student, student => student.projects) student: Student; 
    @Column("text")
    description: string

    @ManyToMany(()=>User)
    user: User
}
