import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function MenuPage() {
    return (
        <SafeAreaView className='bg-zinc-800' style={{ flex: 1 }}>
            <StatusBar style="dark" />

        </SafeAreaView>
    )
}