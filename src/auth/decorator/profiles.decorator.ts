import { SetMetadata } from '@nestjs/common';
import { profile } from "../../../generated/prisma/enums";

export const PROFILES_KEY = 'profiles';

export const Roles = (...profiles: profile[]) => SetMetadata(PROFILES_KEY, profiles);