import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { InviteUserDto } from './invite-user.dto';

export class UpdateUserDto extends PartialType(OmitType(InviteUserDto, ['email'] as const)) {
}
