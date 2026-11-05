import { SetMetadata } from '@nestjs/common';
import { UserStatus } from '../../generated/prisma/enums';

export const STATUS_KEY = 'status';
export const AllowedStatus = (...status: UserStatus[]) =>
  SetMetadata(STATUS_KEY, status);