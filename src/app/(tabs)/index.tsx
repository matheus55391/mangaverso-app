import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { View, ScrollView, Image, Text } from 'react-native'
import * as Icon from "react-native-feather"
import { themeColors } from '../../theme'
import FeaturedRow from '../../components/HorizontalScroll'
import { useQuery } from '@tanstack/react-query'
import MangaService from '../../services/MangaService'
import { Image as ExpoImage } from 'expo-image';

const Page = () => {
  const { isFetched, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => MangaService.getAll(),
  })



  return (
    <SafeAreaView className='bg-zinc-800' style={{ flex: 1, maxHeight: '100%' }}>
      <StatusBar style="dark" />

      {
        !isFetched ?
          <View className='items-center justify-center h-full animate-pulse'>
            <Text className='text-white font-bold text-xl animate-ping'>Carregando...</Text>
          </View>

          :
          <>
            {/* header */}
            <View className='flex-row justify-between items-center space-x-2 px-4 pb-2'>
              <View className='flex-row items-center space-x-2'>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className='flex-row overflow-hidden rounded-full'>
                  <Image source={require('../../../assets/images/app.png')} style={{ height: 45, width: 45 }} />
                </View>
                <Text className='text-sky-500  font-bold text-lg'>Manga<Text className='text-white'>verso</Text></Text>
              </View>
              <View className='flex-row items-center space-x-6'>
                <Icon.Search height={"25"} width={"25"} strokeWidth={"2.5"} stroke={"white"} />

                <View style={{ backgroundColor: themeColors.bgColor(1) }} className='p-3 rounded-full'>
                  <Icon.User height={"20"} width={"20"} strokeWidth={"2.5"} stroke={"white"} />
                </View>

              </View>
            </View>

            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

              <FeaturedRow
                title='Em alta'
              >
                {
                  [1, 2, 3, 4, 5].map((data, index) => {
                    return (
                      <View key={index} className='overflow-hidden bg-red-400 rounded-xl  my-2'>
                        <Image source={require('../../../assets/images/pizzaCat.png')} style={{ height: 180, width: 300 }} />
                      </View>
                    )
                  })
                }
              </FeaturedRow>

              <FeaturedRow
                title='Novos capítulos'
              >
                {
                  data?.data.map((data, index) => {
                    return (
                      <View key={index} className='flex flex-col space-y-1 my-2 max-w-[120]' >
                        <View className='overflow-hidden bg-red-400 rounded-xl'>
                          <ExpoImage
                            style={{ height: 160, width: 120 }}
                            source={data.posterUrl}
                            // placeholder={blurhash}
                            contentFit="fill"
                            transition={250}
                          />
                        </View>
                        <Text className='text-white text-[16px] font-bold'>{data.title}</Text>
                        {/* <Text numberOfLines={1} className='text-gray-200 text-[12px]'>{data.description}</Text> */}
                      </View>
                    )
                  })
                }
              </FeaturedRow>
              <FeaturedRow
                title='Recém adicionados'
              >
                {
                  [1, 2, 3, 4, 5].map((data, index) => {
                    return (
                      <View key={index} className='flex flex-col space-y-1  my-2'>
                        <View className='overflow-hidden bg-red-400 rounded-xl'>
                          <Image source={require('../../../assets/images/pizzaCat.png')} style={{ height: 160, width: 120 }} />

                        </View>
                        <Text className='text-white text-[16px] font-bold'>Jujutsu Kaisen</Text>
                        <Text className='text-gray-200 text-[12px]'>34. Pandemonium</Text>
                      </View>
                    )
                  })
                }
              </FeaturedRow>

            </ScrollView>
          </>
      }

    </SafeAreaView>
  )
}

export default Page