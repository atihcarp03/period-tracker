import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
  <Stack>
    <Stack.Screen name='home' options={{headerShown:false}}></Stack.Screen>
  </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})