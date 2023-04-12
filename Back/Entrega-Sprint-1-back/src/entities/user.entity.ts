import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contacts } from "./contact.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    avatar: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column()
    telephone: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contacts, (contacts) => contacts.users)
    contacts: Contacts[];
}
