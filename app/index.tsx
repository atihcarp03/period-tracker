import { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { router, } from 'expo-router';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
const image = require('../assets/images/period-tracker.png');

export default function HomeScreen() {
  const today = new Date().toDateString();


  return (
    <SafeAreaView className='bg-main'>

      <View className='bg-main text-regular h-full font-pregular min-h-[100vh] flex-1  items-center mt-3'>

        <Animated.View className='p-5' entering={FadeIn.delay(800)}>
          <Text className='font-pbold text-main-accent text-large'>
            My Period Tracker
          </Text>
          <Text className='pt-4 text-center text-gray-500 font-pmedium'>
             Today:&nbsp; {today}
          </Text>
        </Animated.View>

        <Animated.View className='pt-5' entering={FadeIn.delay((1400))}>
            <Text className='text-center text-gray-500 font-pmedium'>
              Estimated period date:
            </Text>
          <Text className=' text-main-primary font-pmedium text-center text-base '>

            {today}
          </Text>
        </Animated.View>



        <Animated.View className='p-3' entering={FadeIn.delay(2000)}>
          <Text className='text-center text-gray-400 font-pmedium'>
           4  days remaining
          </Text>

          <View className=' mt-4 p-4 rounded-xxl bg-button text-white'>
          <TouchableOpacity onPress={() => router.navigate('/calendar')} >
            <View>
              <Text className='text-white text-base font-pregular'> Period Started</Text>
            </View>
          </TouchableOpacity>
        </View>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(1000)} >
          <Image style={{ width: '300px', height: '300px' }} source={image}>

          </Image>

        </Animated.View>



       
      </View>


    </SafeAreaView>

  );
}
