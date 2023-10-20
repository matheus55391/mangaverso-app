import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function FavoritesPage() {
  return (
    <SafeAreaView className='bg-zinc-800' style={{ flex: 1 }}>
      <StatusBar style="dark" />

    </SafeAreaView>
  )
}