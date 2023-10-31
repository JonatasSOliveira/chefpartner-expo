import { SafeAreaView } from 'react-native'
import React from 'react'

interface ScreenContainerProps {
    children: React.ReactElement
}

export default function ScreenContainer({ children }: ScreenContainerProps) {
  return (    
    <SafeAreaView style={{flex: 1, padding: 10}}>
      {children}
    </SafeAreaView>
  )
}