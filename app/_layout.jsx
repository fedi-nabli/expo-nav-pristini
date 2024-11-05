import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#c154c1'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20
        }
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Base' }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout