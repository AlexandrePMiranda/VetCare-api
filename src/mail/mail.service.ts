import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get<string>("MAIL_HOST"),
      port: Number(this.config.get("MAIL_PORT")),
      secure: false, // porta 587 usa STARTTLS
      auth: {
        user: this.config.get<string>("MAIL_USER"),
        pass: this.config.get<string>("MAIL_PASS"),
      },
    });
  }

  async sendConfirmationEmail(to: string, token: string) {
    const link = `https://vetcare-aal.vercel.app/convite/${token}`;

    try {
      await this.transporter.sendMail({
        from: `"Clínica VetCare" <${this.config.get<string>("MAIL_USER")}>`,
        to,
        subject: "Confirme seu e-mail",
        html: `
          <h2>Bem-vindo!</h2>
          <p>Clique no botão abaixo para confirmar sua conta:</p>
          <p>
            <a href="${link}"
               style="display:inline-block;padding:10px 20px;background:#2563eb;color:#fff;text-decoration:none;border-radius:6px">
              Confirmar e-mail
            </a>
          </p>
          <p>Ou copie este link: <br>${link}</p>
          <p>Se você não criou esta conta, ignore este e-mail.</p>
        `,
        text: `Confirme sua conta acessando: ${link}`,
      });

      this.logger.log(`E-mail enviado para ${to}`);
    } catch (error) {
      this.logger.error(`Falha ao enviar e-mail para ${to}`, error);
      throw error;
    }
  }
}