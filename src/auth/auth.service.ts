import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { compare, hash } from 'bcrypt';
import { ReturnLoginDto } from './dto/returnLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { returnUserDto } from 'src/user/DTO/returnUser.dto';
import { LoginPayload } from './dto/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('email ou senha invalidos!');
    }
    return {
      accessToken: await this.jwtService.signAsync({
        ...new LoginPayload(user),
      }),
      user: new returnUserDto(user),
    };
  }
}
