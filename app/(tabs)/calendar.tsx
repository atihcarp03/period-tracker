import { View, Text , BackHandler} from 'react-native'
import React, { useEffect, useState,  } from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { router, } from 'expo-router';

const CalendarPage = () => {
    const [date,setDate]:any =useState({});
    const selectDate = (d:any)=>{
      let newDate = {...date}
      let isStartingDate = false;
      if(!Object.keys(newDate)?.length){
        isStartingDate = true ;
      }
  
      newDate[d?.dateString]={selected: true, color: 'pink', textColor:'#F36563'}
      isStartingDate ? newDate[d?.dateString].startingDay = isStartingDate : newDate[d?.dateString].endingDay = true;
  
      
      console.log(newDate)
      setDate(newDate)
    }
    useEffect(()=>{
      console.log(date)
    },[date])
    
  return (
    <SafeAreaView className='bg-main justify-center'>
      <Appbar.Header className='text-center'>
      <Appbar.BackAction onPress={() => router.navigate('/')} />
    </Appbar.Header>
    
      <View className='bg-main justify-center text-center align-center min-h-[100vh]'>
    
    <View>
      <Text className='font-pmedium text-center  p-4 text-main-accent'>
        Tap on the date to adjust your period
      </Text>
    </View>
      <Calendar
      style={{width:'300px', "fontFamily":'UbuntuMedium sans-serif',margin:'auto', color:'#F36563'}}
    
      headerStyle={{"fontFamily":"UbuntuMedium"}}
      
      markingType={'period'}

  onDayPress={(s:any)=> selectDate(s) 
}
markedDates={date}
/>
      </View>

    </SafeAreaView>
  )
}

export default CalendarPage