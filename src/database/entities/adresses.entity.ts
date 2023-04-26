import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("adresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 9 })
  cep: string;

  @Column({ length: 150 })
  state: string;

  @Column({ length: 150 })
  city: string;

  @Column({ length: 150 })
  street: string;

  @Column()
  number: number;

  @Column({ length: 200 })
  complement: string;
}
