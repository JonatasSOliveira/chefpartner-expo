import { firebaseAuth } from "@libs/firebase";
import { FirebaseError } from "firebase/app";
import { User, createUserWithEmailAndPassword } from "firebase/auth";

export class FirebaseAuthService {
  public async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      return user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }

      throw error;
    }
  }
}
