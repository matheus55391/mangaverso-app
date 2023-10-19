import { View, ScrollView, TouchableOpacity, Text, Image, ImageRequireSource } from 'react-native'
import React from 'react'
import Category from '../../@types/Category';
import { CategoryItem } from './components/CategoryItem';


const categories: Category[] = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 3,
        name: 'Sushi',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 4,
        name: 'Pasta',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 5,
        name: 'Salad',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 6,
        name: 'Mexican',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 7,
        name: 'Seafood',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 8,
        name: 'Desserts',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 9,
        name: 'Steak',
        image: require('../../../assets/images/pizzaCat.png'),
    },
    {
        id: 10,
        name: 'Vegan',
        image: require('../../../assets/images/pizzaCat.png'),
    },
];
export default function CategoriesList() {
    const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null)

    return (
        <View className='my-4'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='overflow-visible'
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categories.map((category: Category, index: number) => {
                        const isSelected = selectedCategory ? selectedCategory === category.id : false
                        return (
                            <CategoryItem
                                key={category.id.toString() + index}
                                id={category.id}
                                name={category.name}
                                image={category.image}
                                isSelected={isSelected}
                                onPress={setSelectedCategory}
                            />
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}   