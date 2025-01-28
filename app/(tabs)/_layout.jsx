import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
  <Tabs screenOptions={{
    headerShown: false,
  }}>
    <Tabs.Screen name='index'
    options={{
        tabBarLabel:'Home',
        tabBarIcon:({color,size})=>(<FontAwesome name="home" size={24} color={color} />)
    }}
    />
    <Tabs.Screen name='AddNew'
    options={{
        tabBarLabel:'Add',
        tabBarIcon:({color,size})=>(<Ionicons name="add-circle" size={24} color={color} />)
    }}
    />
    <Tabs.Screen name='Profile'
    options={{
        tabBarLabel:'Add',
        tabBarIcon:({color,size})=>(<FontAwesome name="user" size={24} color={color} />)
    }}/>
  </Tabs>
  )
}