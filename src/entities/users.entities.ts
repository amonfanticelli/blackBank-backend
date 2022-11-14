import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Account } from "./accounts.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Account)
  @JoinColumn()
  account: Account;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
