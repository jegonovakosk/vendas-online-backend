import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './DTO/createUser.dto';
import { retry } from 'rxjs';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async CreateUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }
}
