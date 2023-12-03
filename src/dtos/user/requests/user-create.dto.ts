import { IsNotEmpty, IsEmail } from "class-validator";

export class UserCreateRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  confirm_password: string;
}
