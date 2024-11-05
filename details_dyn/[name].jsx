import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'

const details = () => {
  const { name } = useLocalSearchParams()
  
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${name} Details`
        }}
      />
      <Text style={styles.text}>Welcome {name} to Dynamic Routing</Text>
    </View>
  )
}

export default details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '600'
  }
})