import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './DTO/createUser.dto';
import { retry } from 'rxjs';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { returnUserDto } from './DTO/returnUser.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UsePipes(ValidationPipe)
  @Post()
  async CreateUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<returnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new returnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  async getUserByIdUsingRelations(
    @Param('userId') userId: number,
  ): Promise<returnUserDto> {
    return new returnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }
}
