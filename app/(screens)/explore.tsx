import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
export default function ExpoloreScreen() {
  return (
<SafeAreaProvider>
    <SafeAreaView className='flex-1 bg-[#171717]'>
        <View className='flex-row items-center border-b-2 border-gray-500 mx-2 py-2'>
        <Icon name="search" size={20} color="#888" />
            <TextInput 
            placeholder='Look for someone?'
            placeholderTextColor="#878787"
            className=' mx-2 pt-5 text-white'>

            </TextInput>
        </View>
    </SafeAreaView>
</SafeAreaProvider>
  )
}