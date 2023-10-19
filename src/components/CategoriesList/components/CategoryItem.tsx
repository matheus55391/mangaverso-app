import { View, ScrollView, TouchableOpacity, Text, Image, ImageRequireSource } from 'react-native'


type CategoryItemProps = {
    id: number;
    name: string;
    image: ImageRequireSource;
    isSelected: boolean;
    onPress: (selectedCategory: number | null) => void;
}

export function CategoryItem({
    id,
    name,
    image,
    isSelected,
    onPress
}: CategoryItemProps) {

    const btnClass = isSelected ? 'bg-gray-600' : 'bg-gray-200'

    return (
        <View className='flex justify-center items-center mr-6 '>
            <TouchableOpacity
                onPress={() => onPress(id)}
                className={'flex rounded-full shadow bg-gray-200 overflow-hidden ' + btnClass}
            >
                <Image style={{ height: 60, width: 60 }} source={image} />
            </TouchableOpacity>
            <Text className='text-gray-500'>{name}</Text>
        </View>
    )
}