import React from 'react';
import ReactDOM from 'react-dom';

import { Pressable, View, Text } from 'react-native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

export default function Navbar(props) {

    return (
        <View className='flex-row justify-center space-x-5 bg-gray-200'>
            <View className='items-center w-16 h-16 pt-2 rounded-sm bg-gray-300'>
                <UserIcon size={32} color='gray' />
                <Text>Home</ Text>
            </View>
            <View className='items-center w-16 h-16 pt-2 rounded-sm bg-gray-300'>
                <UserIcon size={32} />
                <Text>Home</ Text>
            </View>
            <View className='items-center w-16 h-16 pt-2 rounded-sm bg-gray-300'>
                <UserIcon size={32} />
                <Text>Home</ Text>
            </View>
        </View>
    )
}