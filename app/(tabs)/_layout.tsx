import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

const AuthLayout = () => {
  
  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='calendarpage' options={{headerShown:false}}></Stack.Screen>
  </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})