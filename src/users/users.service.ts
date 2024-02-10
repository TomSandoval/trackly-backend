import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(user: CreateUserDto) {
    const passwordHashed = await bcrypt.hash(user.password, 8);
    user.password = passwordHashed;

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}
