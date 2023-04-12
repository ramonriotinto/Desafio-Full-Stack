import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    avatar: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.contacts, {
        eager: true,
        onDelete: "CASCADE",
    })
    users: User;
}
