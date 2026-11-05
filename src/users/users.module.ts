import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [
    JwtModule.register({
    secret: process.env.INVITE_JWT_SECRET,
    signOptions: { expiresIn: '48h' },
})
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, MailService],
})
export class UsersModule {}
