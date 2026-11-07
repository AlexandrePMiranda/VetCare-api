import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreatePetDto } from './create-pet.dto';

export class UpdatePetDto extends PartialType(
  OmitType(CreatePetDto, ['petOwnerId'] as const),
) {}