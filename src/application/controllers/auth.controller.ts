import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";
import { AuthInputPort } from "@domain/ports/input-ports/auth.input-port";
import { AuthService } from "@domain/services/auth.service";
import { FirebaseUserRepositoryAdapter } from "@infra/external_libs/firebase/adapters/user-repository.adapter";

export class AuthController implements AuthInputPort {
  private authService = new AuthService(new FirebaseUserRepositoryAdapter());

  async signUp(user: UserSignUpDto): Promise<void> {
    await this.authService.signUp(user);
  }
}
