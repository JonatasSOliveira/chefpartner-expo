import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 12;
`;

export default function AppLayout() {
  return (
    <PaperProvider>
      <SafeArea>
        <Slot />
      </SafeArea>
    </PaperProvider>
  );
}