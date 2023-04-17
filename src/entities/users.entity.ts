import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Advertisement } from "./adverts.entity";
import { Comment } from "./comments.entity";
import { Address } from "./adresses.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ unique: true, length: 11  })
  cpf: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 11 })
  telephone: string;

  @Column()
  date_of_birth: string;

  @Column({ length: 300 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.user)
  advertisements: Advertisement[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToOne(() => Address, { onDelete: "CASCADE" })
  @JoinColumn()
  address: Address;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, 10);
  }
}
