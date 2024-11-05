import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />
        }}
      />
      <Tabs.Screen
        name='details'
        options={{
          title: 'Details',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='list' color={color} />
        }}
      />
    </Tabs>
  )
}

export default TabLayout