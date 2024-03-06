import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";

export interface UserRepositoryOutputPort {
  signUp(user: UserSignUpDto): Promise<void>;
}
