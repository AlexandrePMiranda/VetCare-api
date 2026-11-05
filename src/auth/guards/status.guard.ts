import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { STATUS_KEY } from '../decorator/status.decorator';
import { UserStatus } from '../../generated/prisma/enums';

interface RequestWithUser {
  user?: {
    status: UserStatus;
  };
}

@Injectable()
export class StatusGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {


    const allowedStatus = this.reflector.getAllAndOverride<UserStatus[]>(
      STATUS_KEY,
      [context.getHandler(), context.getClass()],
    );


    if (!allowedStatus || allowedStatus.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user || !user.status) {
      return false;
    }
    return allowedStatus.includes(user.status);
  }
}