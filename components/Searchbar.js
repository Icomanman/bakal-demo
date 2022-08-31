import { View, Text } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

export default function Searchbar() {
  return (
    <View className='flex-row my-1 py-2 bg-gray-100 rounded-lg'>
      <Text className='font-bold text-gray-800 text-xl'>
        Welcome home!
      </Text>
      <Feather name='search' size={24} color='rgb(17, 24, 39)' />
    </View>
  )
}