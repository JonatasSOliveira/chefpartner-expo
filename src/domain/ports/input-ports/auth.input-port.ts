import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";

export interface AuthInputPort {
  signUp(user: UserSignUpDto): Promise<void>;
}
