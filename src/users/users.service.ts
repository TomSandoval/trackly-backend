import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) return user;
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async updateUser(id: string, newData: UpdateUserDto) {
    try {
      await this.userRepository.update(id, newData);

      return {
        success: true,
        message: 'Successfully updated user',
      };
    } catch (error) {
      throw new HttpException(
        'Error to updated user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // async registerUser(user: CreateUserDto) {
  //   const { email, username } = user;

  //   const userFound = await this.userRepository
  //     .createQueryBuilder('users')
  //     .where('users.email = :email OR users.username = :username', {
  //       email,
  //       username,
  //     })
  //     .getOne();

  //   if (userFound) {
  //     throw new HttpException(
  //       'Email or username already in use',
  //       HttpStatus.CONFLICT,
  //     );
  //   } else {
  //     const passwordHashed = await bcrypt.hash(user.password, 8);
  //     user.password = passwordHashed;

  //     const newUser = this.userRepository.create(user);
  //     return this.userRepository.save(newUser);
  //   }
  // }

  // async logginUser(user: LoginUserDto) {
  //   const {email, password} = user

  //   const userFound = await this.userRepository.findOne({
  //     where: {
  //       email
  //     }
  //   })

  //   if (!userFound) {
  //     throw new HttpException("Non-existent user", HttpStatus.NOT_FOUND)
  //   } else {
  //     const passwordMatch = await bcrypt.compare(password, userFound.password)

  //     if (!passwordMatch) {
  //       throw new HttpException("Password invalid", HttpStatus.UNAUTHORIZED)
  //     } else {
  //       return userFound
  //     }
  //   }
  // }
}
