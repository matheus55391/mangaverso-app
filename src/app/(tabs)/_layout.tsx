import React from 'react'
import { Tabs } from 'expo-router'
import * as Icon from "react-native-feather"

export default function _LayoutTabs() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Icon.Home height={size} width={size} strokeWidth={"2.5"} stroke={color} />
                    ),

                    tabBarStyle: {
                        backgroundColor: 'rgb(39 39 42)',
                        borderColor: 'rgb(39 39 42)',
                    }
                }}
            />
            <Tabs.Screen
                name="mangas"
                options={{
                    title: 'Mangas',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Icon.BookOpen height={size} width={size} strokeWidth={"2.5"} stroke={color} />
                    ),

                    tabBarStyle: {
                        backgroundColor: 'rgb(39 39 42)',
                        borderColor: 'rgb(39 39 42)',
                    }
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Icon.Star height={size} width={size} strokeWidth={"2.5"} stroke={color} />
                    ),

                    tabBarStyle: {
                        backgroundColor: 'rgb(39 39 42)',
                        borderColor: 'rgb(39 39 42)',
                    }
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: 'Mais',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Icon.Menu height={size} width={size} strokeWidth={"2.5"} stroke={color} />
                    ),

                    tabBarStyle: {
                        backgroundColor: 'rgb(39 39 42)',
                        borderColor: 'rgb(39 39 42)',
                    }
                }}
            />



        </Tabs>
    )
}