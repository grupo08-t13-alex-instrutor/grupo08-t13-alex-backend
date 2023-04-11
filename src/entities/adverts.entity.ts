import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("adverts")
export class Advertisement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  brand: string;

  @Column({ length: 250 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column()
  fuel: string;

  @Column()
  mileage: number;

  @Column({ length: 50 })
  color: string;

  @Column()
  price: number;

  @Column({ length: 300 })
  description: string;

  @Column()
  published: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
