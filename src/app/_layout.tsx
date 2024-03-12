import { Slot } from 'expo-router';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding: 12px;
`;

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}; 

export default function AppLayout() {

  return (
    <PaperProvider theme={theme}>
      <SafeArea style={{ backgroundColor: theme.colors.background }}>
        <Slot />
      </SafeArea>
    </PaperProvider>
  );
}