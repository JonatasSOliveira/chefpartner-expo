import { Person } from "./person.model";

export class User extends Person {
  private email: string;
  private unCryptedPassword: string;

  // getters and setters

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getUncryptedPassword(): string {
    return this.unCryptedPassword;
  }

  public setUncryptedPassword(password: string) {
    this.unCryptedPassword = password;
  }
}
