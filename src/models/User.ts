import BaseModel, { BaseAttrs } from "./BaseModel";

export interface UserAttrs extends BaseAttrs {
    name: string;
    email: string;
    password: string;
}

export default class User extends BaseModel<UserAttrs> {
    private name: string;
    private email: string;
    private password: string;

    constructor({ name, email, password }: UserAttrs) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    override getRawValue(): UserAttrs {
        return { name: this.name, email: this.email, password: this.password };
    }
}