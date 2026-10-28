import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PROFILES_KEY } from '../decorator/profiles.decorator';
import { profile } from '../../../generated/prisma/enums';

interface RequestWithUser {
  user?: {
    profile: profile;
  };
}

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredProfiles = this.reflector.getAllAndOverride<profile[]>(PROFILES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredProfiles || requiredProfiles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user || !user.profile) {
      return false;
    }
    return requiredProfiles.includes(user.profile);
  }
}
