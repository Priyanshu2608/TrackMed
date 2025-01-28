import { View, Text } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <View>
        <Image source={require('./../../assets/images/login.png')}
            style={{width: 210, height: 450}}
        />
      </View>
    </View>
  )
}