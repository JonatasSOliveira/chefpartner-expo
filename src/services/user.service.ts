import { UserCreateRequestDto } from "../dtos/user/requests/user-create.dto";
import { UserValidator } from "../validators/user.validator";

export class UserService {
  constructor(private userValidator: UserValidator) {}

  public async create(user: UserCreateRequestDto): Promise<void> {
    await this.userValidator.validateCreate(user);
  }
}
