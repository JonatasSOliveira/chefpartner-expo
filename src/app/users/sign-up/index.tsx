import { View, Text } from "react-native";
import React, { useState } from "react";
import { UserService } from "../../../services/user.service";
import { UserValidator } from "../../../validators/user.validator";

export default function UserSignUp() {
  const userService = new UserService(new UserValidator());

  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

  async function create() {
    await userService.create({ name, email, password, confirm_password: confirmPassword });
  }

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
