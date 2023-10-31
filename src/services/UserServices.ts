import { supabase } from "@libs/supabase";
import User from "@models/User";
import BaseService from "./BaseService";

export default class UserService extends BaseService {
    async signUp(user: User): Promise<void> {
        const result = await supabase.auth.signUp(user.getRawValue());
      }
}