import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
      <View style={{
        dispplay:'flex',
        alignItems:'center',
        marginTop:60

      }}>
        <Image source={require('./../../assets/images/login.png')}
            style={styles?.image}
        />
      </View>
      <View style={{
        padding:23,
      }}>
      <Text>Stay on Track, Stay Healthy!</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:210,
        height:450,
        borderRadius:30
    }
})