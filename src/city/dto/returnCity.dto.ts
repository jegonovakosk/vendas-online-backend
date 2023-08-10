import { ReturnStateDto } from 'src/state/dto/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class ReturnCityDto {
  state?: ReturnStateDto;
  name: string;
  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new ReturnStateDto(city.state) : undefined;
  }
}
