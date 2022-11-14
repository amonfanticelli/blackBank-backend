import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Account } from "./accounts.entities";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Account)
  @JoinColumn()
  debitedAccount: Account;

  @ManyToOne(() => Account)
  @JoinColumn()
  creditedAccount: Account;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
