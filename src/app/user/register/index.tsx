import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from '@components/ScreenContainer';

export default function UserRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ScreenContainer>
            <Text>UserRegister</Text>
        </ScreenContainer>
    )
}