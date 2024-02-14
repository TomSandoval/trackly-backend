import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  getUsers() {
    return this.userServices.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userServices.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() newData: UpdateUserDto) {
    return this.userServices.updateUser(id, newData);
  }
}
