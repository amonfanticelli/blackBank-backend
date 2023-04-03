import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

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
