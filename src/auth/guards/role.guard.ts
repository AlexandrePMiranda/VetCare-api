import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PROFILES_KEY } from '../decorator/role.decorator';
import { Role } from '../../generated/prisma/enums';


interface RequestWithUser {
  user?: {
    role: Role;
  };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredProfiles = this.reflector.getAllAndOverride<Role[]>(PROFILES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredProfiles || requiredProfiles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user || !user.role) {
      return false;
    }
    return requiredProfiles.includes(user.role);
  }
}
