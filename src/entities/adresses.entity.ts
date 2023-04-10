import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("adresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 150 })
  state: string;

  @Column({ length: 150 })
  city: string;

  @Column({ length: 150 })
  road: string;

  @Column()
  number: number;

  @Column({ length: 200 })
  complement: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
