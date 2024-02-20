import { View, Text } from "react-native";
import React, { useState } from "react";
import { FirebaseAuthService } from "@services/firebase-auth.service";

export default function UserSignUp() {
  const firebaseAuthService = new FirebaseAuthService();

  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
