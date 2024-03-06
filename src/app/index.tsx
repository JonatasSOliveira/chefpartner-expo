import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return <View>
    <Link href="/users/sign-up">Novo usuário</Link>
  </View>;
}
