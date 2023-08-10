import { returnUserDto } from './../../user/DTO/returnUser.dto';
export interface ReturnLoginDto {
  user: returnUserDto;
  accessToken: string;
}
