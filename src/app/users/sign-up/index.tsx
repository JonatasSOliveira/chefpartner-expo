import { View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { UserSignUpDto } from "@domain/dtos/user-sign-up.dto";
import { AuthController } from "@application/controllers/auth.controller";
import { router } from "expo-router";

export default function UserSignUpPage() {
  const authController = new AuthController();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async (): Promise<void> => {
    try {
      await authController.signUp(new UserSignUpDto(email, password, confirmPassword));
      router.replace('/home');
    } catch (error) {
      alert((error as Error).message);
      throw error;
    }
  }

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        label="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button mode="contained" onPress={signUp}>
        Cadastrar
      </Button>
    </View>
  );
}
