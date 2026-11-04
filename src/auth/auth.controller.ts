import { Body, Controller, Param, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { AcceptInviteDto } from "../users/dto/accept-invite.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async fazerlogin(@Body() credenciais: LoginDto) {
    return await this.authService.validarAcesso(credenciais);
  }

  @Post('invite/:token/accept')
  acceptInvite(@Body() acceptIviteDto: AcceptInviteDto, @Param('token') token: string){
    return this.authService.acceptInvite(acceptIviteDto, token)
  }
}
