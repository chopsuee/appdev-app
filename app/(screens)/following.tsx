import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Following() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="border-2 h-screen p-5"></View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}