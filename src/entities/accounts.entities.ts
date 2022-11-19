import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./users.entities";
@Entity("accounts")
export class Account {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  balance: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
