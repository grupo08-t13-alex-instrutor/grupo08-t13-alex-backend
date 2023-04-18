import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { Image } from "./images.entity";
import { Comment } from "./comments.entity";

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
  fuel: number;

  @Column()
  mileage: number;

  @Column({ length: 50 })
  color: string;

  @Column()
  price: number;

  @Column({ length: 300 })
  description: string;

  @Column({ default: true })
  published: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Image, (image) => image.advertisement)
  images: Image[];
  
  @OneToMany(() => Comment, (comment) => comment.advertisement)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.advertisements, { onDelete: "CASCADE" })
  user: User;
}
