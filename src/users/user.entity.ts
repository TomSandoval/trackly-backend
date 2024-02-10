import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ nullable: true })
  gender: 'MALE' | 'FEMALE';

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  age: number;
}
