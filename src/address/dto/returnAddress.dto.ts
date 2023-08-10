import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  cep: string;
  numberAddress: number;
  cityId: number;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.cep = address.cep;
    this.numberAddress = address.numberAddress;
  }
}
