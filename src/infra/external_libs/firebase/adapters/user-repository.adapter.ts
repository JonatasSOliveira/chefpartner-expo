import { UserRepositoryOutputPort } from "@domain/ports/output-port/user-repositoy.output-port";
import { firebaseAuth } from "..";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";

export class FirebaseUserRepositoryAdapter implements UserRepositoryOutputPort {
  async signUp(user: UserSignUpDto): Promise<void> {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        firebaseAuth,
        user.getEmail(),
        user.getPassword()
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }

      throw error;
    }
  }
}
