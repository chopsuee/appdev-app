import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PostCard from '@/components/material/PostCard'
PostCard
export default function Following() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <PostCard />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}