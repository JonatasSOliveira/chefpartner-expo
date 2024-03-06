import { BaseModel } from "./base.model";

export abstract class Person extends BaseModel {
  protected name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
