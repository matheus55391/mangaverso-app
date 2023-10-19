import { ScrollView, Text, View } from "react-native"


type HorizontalScrollProps = {
    title: string,
    children?: React.ReactNode
}
export default function HorizontalScroll({ title, children }: HorizontalScrollProps) {

    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg text-white">{title}</Text>
                </View>

            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 15 }}
                className="flex flex-row  overflow-visible space-x-2 "
            >
                {
                    children
                }
            </ScrollView>
        </View>
    )
}