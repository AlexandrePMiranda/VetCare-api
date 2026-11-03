import { SetMetadata } from '@nestjs/common';
import { Role } from '../../generated/prisma/enums';


export const PROFILES_KEY = 'roles';

export const Roles = (...Roles: Role[]) => SetMetadata(PROFILES_KEY, Roles);