import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Advertisement } from "./adverts.entity";

@Entity("images")
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  link: string;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.id)
  advertisemment: Advertisement;
}
