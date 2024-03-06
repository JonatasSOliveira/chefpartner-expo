import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";
import { UserRepositoryOutputPort } from "@domain/ports/output-port/user-repositoy.output-port";

export class AuthService {
  constructor(private userRepository: UserRepositoryOutputPort) {}

  async signUp(user: UserSignUpDto): Promise<void> {
    await this.userRepository.signUp(user);
  }
}
