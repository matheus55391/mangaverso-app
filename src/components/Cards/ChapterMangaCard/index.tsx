import { View, Text, Pressable } from 'react-native'
import React from 'react'

export type ChapterMangaCardProps = {
    title: string,
    date: string,
    onPress?: () => void
}

export default function ChapterMangaCard({ title, date, onPress }: ChapterMangaCardProps) {
    return (
        <Pressable className='flex flex-col pb-2' onPress={onPress}>
            <Text numberOfLines={1} className='text-white text-sm'>{title}</Text>
            <Text className='text-gray-400 text-xs'>{date}</Text>
        </Pressable>
    )
}