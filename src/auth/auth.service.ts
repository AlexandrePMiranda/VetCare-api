import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { AcceptInviteDto } from '../users/dto/accept-invite.dto';
import { UserStatus } from '../generated/prisma/enums';
import { hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { ResponseUserDto } from '../users/dto/response-user.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validarAcesso(credenciais: LoginDto) {
    const usuario = await this.authRepository.findUserByEmail(
      credenciais.email,
    );

    if (!usuario) {
      throw new UnauthorizedException('e-mail e/ou senha incorretos.');
    }
    if (!usuario.password){
      throw new BadRequestException;
    }
    const senhaValida = await bcrypt.compare(
      credenciais.password,
      usuario.password,
    );

    if (!senhaValida) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }

    const payload = {
      sub: usuario.id,
      name: usuario.name,
      email: usuario.email,
      role: usuario.role,
    };

    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken, user: plainToInstance(ResponseUserDto, usuario, {
    excludeExtraneousValues: true,
  })};
  }
  async acceptInvite(acceptIviteDto: AcceptInviteDto, token: string){
    let payload: { sub: string, email: string, porpose: string };

    try {
      payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.INVITE_JWT_SECRET,
      });
    } catch {
      console.log('checkpoint')
      throw new BadRequestException('Convite inválido ou expirado');
    }
    const user = await this.authRepository.findUserByEmail(payload.email);
    if (payload.porpose !== 'invite' ||  !user || user.status !== UserStatus.PENDING_INVITE) {
      console.log(payload.porpose)
      console.log(user)
      throw new BadRequestException('Convite inválido ou expirado');
    }

    const passwordHash = await hash(acceptIviteDto.password, 10)

    await this.authRepository.update(user.id, {
      password: passwordHash,
      status: UserStatus.ACTIVE,
    });
    const newpayload = {
          sub: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
    const accessToken = this.jwtService.sign(newpayload);
   
    return { access_token: accessToken, user: plainToInstance(ResponseUserDto, user, {
    excludeExtraneousValues: true,
  })};
  }
}




