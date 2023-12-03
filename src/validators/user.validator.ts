import { validateOrReject } from "class-validator";
import { UserCreateRequestDto } from "../dtos/user/requests/user-create.dto";

export class UserValidator {
  public async validateCreate(user: UserCreateRequestDto): Promise<void> {
    try {
      await validateOrReject(user);
    } catch (error) {}
  }
}
