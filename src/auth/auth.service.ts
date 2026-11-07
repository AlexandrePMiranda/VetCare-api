import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { UserStatus } from '../generated/prisma/enums';
import { hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { ResponseUserDto } from '../users/dto/response-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';


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
    if(usuario.status!== 'ACTIVE'){
      throw new UnauthorizedException;
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

    await this.authRepository.update(usuario.id,{lastAccessAt: new Date()})

    const payload = {
      sub: usuario.id,
      name: usuario.name,
      email: usuario.email,
      role: usuario.role,
      status: usuario.status
    };

    const accessToken = this.jwtService.sign(payload);
    const res: LoginResponseDto = { access_token: accessToken, user: plainToInstance(ResponseUserDto, usuario, {excludeExtraneousValues: true })};
    return res;
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
      throw new BadRequestException('Convite inválido ou expirado');
    }

    const passwordHash = await hash(acceptIviteDto.password, 10)

    await this.authRepository.update(user.id, {
      password: passwordHash,
      status: UserStatus.ACTIVE,
      lastAccessAt: new Date()
    });
    const newpayload = {
          sub: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status
        }
    const accessToken = this.jwtService.sign(newpayload);

    const res: LoginResponseDto = { access_token: accessToken, user: plainToInstance(ResponseUserDto, user, {excludeExtraneousValues: true })};
    return res
  }
}




