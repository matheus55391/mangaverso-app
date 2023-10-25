
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { themeColors } from '../../theme';
import * as Icon from "react-native-feather";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import MangaService from '../../services/MangaService';
import { Image as ExpoImage } from 'expo-image';
import ChapterMangaCard from '../../components/Cards/ChapterMangaCard';

export default function DetailPage() {
    const router = useRouter()
    const local = useLocalSearchParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ['getMangaById'],
        queryFn: () => MangaService.getById(Number(local.id)),
    })

    if (isLoading) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }


    return (
        <View className='bg-black'>
            <ScrollView>

                <View className='relative' >

                    <ExpoImage
                        style={{
                            height: 288,
                            width: Dimensions.get('screen').width,
                            opacity: 0.5


                        }}
                        source={data?.posterUrl}
                        // placeholder={blurhash}
                        contentFit="cover"
                        transition={250}
                    />
                    <TouchableOpacity
                        className='absolute top-12 left-4 bg-transparent p-2 rounded-full shadow'
                        onPress={() => router.back()}
                    >
                        <Icon.ArrowLeft strokeWidth={3} stroke={'#fff'} height={20} width={20} />
                    </TouchableOpacity>
                    <View
                        className='absolute top-28 left-4   rounded-sm '
                    >
                        <View className='flex flex-row space-x-2'>

                            <ExpoImage
                                style={{
                                    height: 160,
                                    width: 100,
                                }}
                                source={data?.posterUrl}
                                // placeholder={blurhash}
                                contentFit="cover"
                                transition={250}
                            />
                            <View className='flex flex-col justify-center '>
                                <Text className='text-white text-2xl font-semibold'>One Piece</Text>
                                <Text className='text-white text-sm'>Oda Eiichiro</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View
                    // style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className='bg-zinc-800 pt-6 h-screen space-y-6 px-6'
                >
                    <View className='flex flex-row justify-center px-5 space-x-14'>
                        <View className='flex flex-col items-center'>
                            <Icon.Heart height={"20"} width={"25"} strokeWidth={"2.5"} stroke={"rgb(156 163 175)"} />
                            <Text className='text-gray-400'>Favoritos</Text>
                        </View>
                        <View className='flex flex-col items-center'>
                            <Icon.BookOpen height={"20"} width={"25"} strokeWidth={"2.5"} stroke={"rgb(156 163 175)"} />
                            <Text className='text-gray-400'>Ler Mangas</Text>
                        </View>
                    </View>

                    <View className='flex flex-col items-center  '>
                        <Text className='text-sm  text-white'>{data?.description}</Text>
                    </View>

                    <View className='flex flex-col'>
                        <Text className='text-sm  text-white py-3'>1095 capítulos</Text>

                        <ChapterMangaCard
                            title='Ch. 1092 - O incidente violento de Kuma, o Tirando, na ilha de ana banana bacana'
                            date='15/09/2023 . PkpaAPI'
                        />
                        <ChapterMangaCard
                            title='Ch. 1092 - O incidente violento de Kuma, o Tirando, na ilha de ana banana bacana'
                            date='15/09/2023 . PkpaAPI'
                        />
                        <ChapterMangaCard
                            title='Ch. 1092 - O incidente violento de Kuma, o Tirando, na ilha de ana banana bacana'
                            date='15/09/2023 . PkpaAPI'
                        />
                        <ChapterMangaCard
                            title='Ch. 1092 - O incidente violento de Kuma, o Tirando, na ilha de ana banana bacana'
                            date='15/09/2023 . PkpaAPI'
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}
