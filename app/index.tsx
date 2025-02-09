import { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated  from 'react-native-reanimated';
import { FadeIn } from 'react-native-reanimated';
import { Link, Redirect, router } from 'expo-router';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function HomeScreen() {
  const [date,setDate]:any =useState({});
  const selectDate = (d:any)=>{
    let newDate = {...date}
    let isStartingDate = false;
    if(!Object.keys(newDate)?.length){
      isStartingDate = true ;
    }

    newDate[d?.dateString]={selected: true, color: 'pink', textColor:'black'}
    isStartingDate ? newDate[d?.dateString].startingDay = isStartingDate : newDate[d?.dateString].endingDay = true;

    
    console.log(newDate)
    setDate(newDate)
  }
  useEffect(()=>{
    console.log(date)
  },[date])

  return (
    <SafeAreaView className='bg-main'>

    <View  className='bg-main text-regular h-full font-pregular min-h-[100vh] flex-1  items-center mt-3'>
    
    <View>
      <Text>
        Headers
      </Text>
    </View>
    <Calendar
      markingType={'period'}

  onDayPress={(s:any)=> selectDate(s) 
}
markedDates={date}
/>
    </View> 

  </SafeAreaView>
   
  );
}
