import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

export default function Searchbar() {
  return (
    <View className='flex-row my-1 rounded items-center w-96 h-10'>
      <TextInput color='rgb(209, 213, 219)' className='text-gray-800 bg-gray-200 text-lg px-2 w-10/12 h-full' placeholder='Search' keyboardType='default' />
      <Pressable className='bg-gray-400 rounded justify-center items-center h-full w-2/12'>
        <Feather name='search' size={24} color='rgb(17, 24, 39)' />
      </Pressable>
    </View>
  )
}