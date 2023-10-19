import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as icon from 'react-native-feather'
import { themeColors } from '../theme'
import { useRouter } from 'expo-router'
import * as Icon from "react-native-feather"

export default function RestaurantPage() {
    const router = useRouter()

    return (
        <View>
            <ScrollView>
                <View className='relative'>
                    <Image className="w-full h-72" source={require('../../assets/images/pizzaCat.png')} />
                    <TouchableOpacity
                        className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
                        onPress={() => router.back()}
                    >
                        <icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} height={20} width={20} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className='bg-white -mt-12 pt-6 h-screen'
                >
                    <View className='flex flex-row justify-between px-5 items-center'>
                        <View>
                            <Text className='text-2xl font-bold'>
                                Pizzaria do Gatinho
                            </Text>
                            <View className='flex flex-row space-x-1 text-gray-600'>
                                <View className='flex flex-row space-x-1'>
                                    <Icon.Star height={"20"} width={"20"} stroke={"#f1c40f"} />
                                    <Text className="text-green-700">4.4</Text>
                                </View>
                                <Text>-</Text>
                                <Text className='font-normal'>
                                    Pizzaria
                                </Text>
                                <Text>-</Text>
                                <View className='flex-row'>
                                    <Icon.MapPin height={"20"} width={"20"} stroke={"red"} />
                                    <Text className="text-gray-500">Av. Paulista, 123, SP</Text>
                                </View>

                            </View>
                        </View>
                        <TouchableOpacity
                            // onPress={() => onPress(id)}
                            className={'flex rounded-full shadow  overflow-hidden p-1'}
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <View className={'flex rounded-full shadow  overflow-hidden '}>
                                <Image style={{ height: 60, width: 60 }} source={require('../../assets/images/pizzaCat.png')} />

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}