export class UserSignUpDto {
  private email: string;
  private password: string;
  private confirmPassword: string;

  constructor(email: string, password: string, confirmPassword: string) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getConfirmPassword(): string {
    return this.confirmPassword;
  }
}
