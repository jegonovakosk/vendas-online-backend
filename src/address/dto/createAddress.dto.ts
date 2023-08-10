import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;
  @IsString()
  cep: string;
  @IsNumber()
  numberAddress: number;
  @IsNumber()
  cityId: number;
}
