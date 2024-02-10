import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userServices: UsersService){}
    
    @Get()
    getUsers(){
        return this.userServices.getUsers();
    }

    

    @Post()
    createUser(@Body() newUser : CreateUserDto){
        return this.userServices.createUser(newUser);
    }

}
