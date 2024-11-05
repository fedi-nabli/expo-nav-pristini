import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'

const details = () => {
  const params = useLocalSearchParams()
  const { username } = params
  
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${username} Details`
        }}
      />
      {/* <Text>Details:</Text> */}
      <Text style={styles.text}>Welcome {username}</Text>
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