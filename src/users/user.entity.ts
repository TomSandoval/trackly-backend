import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum GenderEnum {
  MALE = "male",
  FEMALE = 'female'
}


@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true,  type: 'enum', enum: GenderEnum})
  gender: GenderEnum;

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ nullable: true })
  avatar: string;
}
