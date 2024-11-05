import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Link, router } from 'expo-router'
import Input from '../components/Input'

const index = () => {
  const [username, setUsername] = useState('')

  const gotoDetails = () => {
    // router.replace('/details')
    router.push('/details')
  }

  return (
    <View style={styles.container}>
      {/* <Button title='Go To Details' onPress={gotoDetails} /> */}
      <Text>Enter Username</Text>
      <Input placeholder={'Enter your username'} value={username} setValue={setUsername} />
      <Link
        href={{
          pathname: '/details',
          params: {
            username
          }
        }}
      >
        Submit
      </Link>
      {/* <Link
        href={{
          pathname: '/details/[name]',
          params: {
            name: username
          }
        }}
      >
        Submit
      </Link> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  }
})