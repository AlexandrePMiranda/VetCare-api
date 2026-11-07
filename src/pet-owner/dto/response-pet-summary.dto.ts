import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { ResponsePetDto } from '../../pet/dto/response-pet.dto';

export class ResponsePetSummary extends PartialType(
  OmitType(ResponsePetDto, ['petOwner'] as const),
) {}